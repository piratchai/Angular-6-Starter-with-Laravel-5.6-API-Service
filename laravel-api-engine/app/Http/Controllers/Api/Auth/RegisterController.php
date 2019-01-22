<?php

namespace App\Http\Controllers\Api\Auth;

use App\User;
use App\Http\Models\Api\Account;
use App\Http\Models\Api\Activity;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\DB;
use App\Mail\ActiveUserMail;
use Illuminate\Support\Facades\Mail;
use App;
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo               = '/thankyou';

    /**
     * Where to redirect useras after account activation
     *
     * @var string
     */
    protected $redirectToLogin          = '/login';
    
    /**
     * The succes code status after success registration
     *
     * @var integer
     */
    protected $successStatus    = 200;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username'  => 'required|string|min:3|unique:users',
            'name'      => 'required|string|max:255',
            'subname'   => 'required|string|max:255',
            'email'     => 'required|string|email|max:255|unique:users',
            'password'  => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'username'  => $data['username'],
            'name'      => $data['name'],
            'subname'   => $data['subname'],
            'email'     => $data['email'],
            'active'    => 0,
            'password'  => Hash::make($data['password']),
        ]);
    }

    /**
    * Register api 
    * 
    * @return \Illuminate\Http\Response 
    */ 
    public function register(Request $request) 
    { 
        $successSave = false;
        $validator = $this->validator( $request->all() );

        if ( $validator->fails() ) { 
            return $this->sendError( $validator->errors(), ['Registration Falied.'],200);            
        }

        DB::beginTransaction();
        $user = $this->create( $request->all() );
        if( $user ){

            $user->token = $this->setCodeToken( $user );
            $user->save();

            Activity::create([
                'user_id'   =>  $user->id,
                'owner_id'  =>  $user->id,
                'type'      =>  $this->lookup()->typeActivity->register,
                'title'     =>  "You was registered successfully ",
                'state'     =>  2,
                'created_at'=>  date('Y-m-d H:i:s')
            ]);
            
            /**
             * We go to save the default account now
             */
            $account = Account::store( $user->id,['type'=>'LEK'] ); 
            if( $account ){

                Activity::create([
                    'user_id'   =>  $user->id,
                    'owner_id'  =>  $account->id,
                    'type'      =>  $this->lookup()->typeActivity->account,
                    'title'     =>  "Default account was saved successfully ",
                    'state'     =>  2,
                    'created_at'=>  date('Y-m-d H:i:s')
                ]);

                $successSave = true;
            }
        }

        if( $successSave  ){
            DB::commit();
            if(App::environment()=="production"){
                $user->token = base64_encode($user->token);
                Mail::to($request['email'])->send(new ActiveUserMail($user));
            }
        }else{
            DB::rollBack();
        }

        return $this->sendResponse( [
            'redirect_url'  => $this->redirectTo,
            'data'          => $user
        ],
        ['You are registered successfully']);   
    }
    public function activate(Request $request){
        $token = base64_decode($request['token']);
        $error = 0;

        $user = User::where('token',$token)->first();
        if ( !$user ){
            $error =1;
        }else{
            $timeout = substr($token, 32);
            if ( $token !== md5($user->id . $user->username . $timeout) . $timeout){
                $error=1;
            }
        }
        if($error==1){
            return $this->sendError([],['Token has expired or is invalid.'],200);
        }else{
            
            $user->active   = 1;
            $user->token    = null;
            $user->save();

            return $this->sendResponse( [
                'redirect_url'  => $this->redirectToLogin,
                'data'          => []
            ],
            ['Account successfully acivated.']);   
        }
    }
    /**
     * resetCodeToken generate the url and reset code for email
     * @param array  $user
     * @param string $name_url
     * @return void
     */
    public function setCodeToken($user){
        $token = null;
        
        if(!$user){
            return $token;
        }
        if(is_array($user) ){
            $user = (object)$user;
        }
        
        /**
         * 24               : time() + 24 * HOUR;
         * (One week)       : time() + (7 * 24 * 60 * 60);
         */

        $timeout  = time() + 24 * 60;
        $token    = md5($user->id . $user->username . $timeout) . $timeout;
        return $token;        
    }
}

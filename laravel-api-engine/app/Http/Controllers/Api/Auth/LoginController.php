<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Http\Request; 
use App\User; 
use App;
use Validator;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected   $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');

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
            'username'  => 'required|string|min:3',
            'password'  => 'required|string|',
        ]);
    }

    public function username(){
        return 'username';
    }
    
    public function loginApi()
    { 
        $validator = $this->validator( request()->all() );

        if( $validator->fails() ){
            return $this->sendError( $validator->errors() ,["Login falied"] ,200);  
        }

        $attemptCheck = [
            'username'  => request('username'),
            'password'  => request('password'),
        ];

        if($this->IfAtiveCheckForProduction()){
            array_push($attemptCheck,['active'=>1]);
        }

        if( Auth::attempt($attemptCheck)){ 
            $user   = Auth::user(); 
            return $this->sendResponse([
                'redirect_url'  => $this->redirectTo,
                'token'         => $user->createToken($this->nameAppToken)->accessToken,
                'data'          => $user
            ],
            ['User authenticate sucessfully']);
        } 
        return $this->sendError( [] , ['Login falied'],200);  

    }

    public function checkAuth(){

        
        return $this->sendResponse( [
            "results"=>[
                'auth'=>Auth::guard('api'),
                Auth()
            ]
        ] , ['Login falied']);  

    }

    private function IfAtiveCheckForProduction(){
        return App::environment() == "local" ? false : true;
    }
}

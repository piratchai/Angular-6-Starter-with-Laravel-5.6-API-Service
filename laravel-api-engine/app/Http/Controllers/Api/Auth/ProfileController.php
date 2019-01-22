<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Controllers\Api\Auth\UserAvatarController;
use App\Http\Models\Api\Account;
use App\Http\Models\Api\Activity;
use App\Http\Models\Api\Transaction;

class ProfileController extends Controller
{
    public function view($id=null){

        if(is_null($id)){
            $this->sendError([],['We except the id of user']);
        }

        $user = User::find($id);
        return $this->sendResponse([
            'data'=>$user
        ],['Accounts extacted successfully']);
    }

    /**
     * Validator User Data Ffor Update
     *
     * @param array $data
     * @return void
     */
    public function validations(array $data,$type='data'){
        switch($type){
            case 'data':
                $validations = [
                    'name'      => 'required|string|max:255',
                    'subname'   => 'required|string|max:255',
                    'email'     => 'required|string|email|max:255|unique:users,email,'.$data["id"].''
                ];
            break;
            case 'password':
                $validations = [
                    'password'  => 'required|string|min:6|confirmed',
                ];
            break;
            case 'avatar':
                $validations = [
                    //'avatar'   => 'required|string',
                ];
            break;
            
        }
        return Validator::make($data,$validations);
    }

    /**
     * Update user data method
     *
     * @param object $data
     * @return void
     */
    private function update($data,$type){

        $user = User::find($data->id);
        switch( $type ){
            case 'data':
                $user->name     = $data->name;
                $user->subname  = $data->subname;
                $user->email    = $data->email;
            break;
            case 'password':
                $user->password = Hash::make($data->password);
            break;
            case 'avatar':
                $user->avatar_url   =   $data->avatar;      
            break;

        }
        return $user->save();
    }
    /**
     * Update just personal data without password
     *
     * @param Request $request
     * @return void
     */
    public function updateData(Request $request){
        return $this->sendResponse( $request->all(),["Data updated successfully"]);

        $validation = $this->validations($request->all(),'data');

        if( $validation->fails() ){
            return $this->sendError( $validation->errors(), ['Request falied'],200 );
        }

        $update =$this->update( (object) $request->all(),'data' );
        return $this->sendResponse($update, ["Data updated successfully"] );
    }

    /**
     * Update the user password
     *
     * @return void
     */
    public function updatePassword(Request $request){
        $validation = $this->validations($request->all(),'password');

        if( $validation->fails() ){
            return $this->sendError( $validation->errors(), ['Request falied'],200 );
        }

        $update =$this->update( (object) $request->all(),'password');
        return $this->sendResponse($update,["Password updated successfully"]);
    }

    /**
     * Update just the avatar_url of the user
     *
     * @param Request $request
     * @return void
     */
    public function updateAvatar(Request $request){
        var_dump($request);
        $validation = $this->validations($request->all(),'avatar');

        if( $validation->fails() ){
            return $this->sendError( $validation->errors(), ['Request falied'],200 );
        }
        
        $path = UserAvatarController::update( $request );
        $update =$this->update((object)['avatar'=>$path],'avatar');
        return $this->sendResponse($update,["Avatar updated successfully"]);
    }

    /**
     * Delete User And his data
     *
     * @return void
     */
    public function delete( $id = null ){
        if(is_null($id)){
            return $this->sendResponse(['deleted'=>$deleted],200);
        }
        DB::beginTransaction();
        $delete     = User::find($id)->delete();
        $deleted    = false;

        if( $delete ){
            try{
                Activity::where('user_id',$id)->delete();
                $Accounts = Account::where('user_id',$id);

                foreach($Accounts as $account){
                    Transaction::where('account_id',$account->id);
                }
    
                $Accounts->delete();
                DB::commit();
                $deleted    = true;
            }
            catch(Exception $e){
                DB::rollback();
                $deleted    = false;
            }

        }else{
            DB::rollback();
            $deleted    = false;
        }
        if($deleted){
            return $this->sendResponse(['deleted'=>$deleted],['Account deleted succesfully']);
        }else{
            return $this->sendResponse(['deleted'=>$deleted],["Somthing is wrong,please try again later!"]);
        }
    }
}

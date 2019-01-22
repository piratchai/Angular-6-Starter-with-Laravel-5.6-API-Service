
<!DOCTYPE html>
<html>
    <head>
        <title>Welcome Email</title>
    </head>
 
    <body>
        <h2>
            Welcome to the site {{$user->name}}  {{$user->subname}}.
        </h2>
        <br/>
            Your account with email {{$user->email}} should be actived before you use it.
        <br/>
            Please click on the link for active it:  <a href="https://personal-bank.firebaseapp.com/active/{{$user->token}}">Go</a>
        <br>
        Thank you.

    </body>
 
</html>
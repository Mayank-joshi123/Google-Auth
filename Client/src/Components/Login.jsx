import React from 'react'
import { GoogleLogin } from 'react-google-login';

function Login() {
  

const CLIENT_ID = "424394368747-6954qtupkuttj8k62t0s0po5kp3buotc.apps.googleusercontent.com";

  const handleSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
};

const handleFailure = (response) => {
    console.error('Login Failed:', response);
};
  return (
    <div>
    <GoogleLogin
  clientId={CLIENT_ID}
  buttonText="Login with Google"
  onSuccess={handleSuccess}
  onFailure={handleFailure}
  cookiePolicy="single_host_origin"
/>
    </div>
  )
}

export default Login
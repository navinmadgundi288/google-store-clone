import React from 'react'
import '../Login.css'; 
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
    <form action="#">
    <hr class="hr1" />
    <hr class="hr2" />
    <div class="desc6"> Welcome back! </div>
    <a href="https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp">
      <div class="google">
        {/* <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> */}
        <img src="../images/Login/glog.png"  alt="" className='glog'/>
        <p class="btn-text"><b> Sign in with Google </b></p>
      </div>
    </a>
    <div class="desc2"> OR LOGIN WITH EMAIL </div>
    <div class="container">
    
    <div class="input-box1">
      <input type="text" required />
      <span>Email Address</span>
    </div>
    <div className='desc3'> Forgot Password? </div>
    <div class="input-box2">
      <input type="text" required />
      <span>Password</span>
    </div>
    
    <input type="button" class="stbn" value="Login" />
    <div class="desc4"> Need an account? </div>
    <Link to='/Register'> <div class="desc5"> Sign up </div> </Link>
  </div>
  </form>
    </>
  )
}

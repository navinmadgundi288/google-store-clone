import React from 'react'
import '../Register.css'; 
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
    <form action="#" className='Formsdata'>
  
    <hr class="hrz3" />
    <hr class="hrz4" />
    <div class="descz6"> Continue With Google </div>
    <div class="panida6"> Create Your New <br /> Account </div>

    <div class="containerz">
    <img alt="" src="../images/Login/glog.png"  className='glogm'/>
        <p class="btn-textm"><b> Sign in with Google </b></p>
   
    <div class="input-boxz1">
      <input type="text" required />
      <span>First Name</span>
    </div> 
    <div class="input-boxz2">
      <input type="text" required />
      <span>Last Name</span>
    </div>
    <div class="input-boxz3">
      <input type="text" required />
      <span>Email</span>
    </div>
    <div class="input-boxz4">
      <input type="text" required />
      <span>Phone No</span>
    </div>
    <div class="input-boxz5">
      <input type="text" required />
      <span>Password</span>
    </div>
    <div class="input-boxz6">
      <input type="text" required />
      <span>Confirm </span>
    </div>
    
    
    <input type="button" class="stbnz" value="Create Account" />
    <div class="desc4z"> Already have an account? </div>
    <Link to='/Login'> <div class="desc5z"> Login </div> </Link>
  </div>
  </form>
    </>
  )
}

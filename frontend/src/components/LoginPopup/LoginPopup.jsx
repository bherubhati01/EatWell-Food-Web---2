/* eslint-disable react/prop-types */
import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {

  const [currState, setCurrState] = useState("login")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? <></> : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & Privacy policy. </p>
        </div>
        {
          currState === "login"
            ? <p>Create a Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have a Account <span onClick={()=>setCurrState("login")}>login here</span></p>
        }


      </form>
    </div>
  )
}

export default LoginPopup;
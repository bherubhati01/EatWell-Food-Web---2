/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import {StoreContext} from '../../Context/StoreContext.jsx'
import axios from 'axios'

function LoginPopup({ setShowLogin }) {
  const {url, setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }))
  }

  const onLogin = async(event) =>{
    event.preventDefault();
    let newUrl = url;
    if(currState === "login"){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data );

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false);
    }else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? <></> : <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Your Name' required />}
          <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Your Email' required />
          <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit' >{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & Privacy policy. </p>
        </div>
        {
          currState === "login"
            ? <p>Create a Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have a Account <span onClick={() => setCurrState("login")}>login here</span></p>
        }


      </form>
    </div>
  )
}

export default LoginPopup;
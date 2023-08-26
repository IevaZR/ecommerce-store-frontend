import React from 'react'
import './UserLogin.css'
// @ts-ignore
import Logo from "./../../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const UserLogin = () => {
    const [loginData, setLoginData] = useState({
        userName: "",
        password: "",
      });
      const navigate = useNavigate();
      const [errorMessage, setErrorMessage] = useState(false);
    
      const handleLoginInput = (event) => {
        setLoginData((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = async () => {
        try {
          const { data } = await axios.post(
            "http://localhost:3009/user/login-user",
            loginData
          );
    
          if (data === "Authorized") {
            navigate("/user-page");
            console.log(loginData);
          } 
        } catch (err) {
          console.log(err);
          setErrorMessage(true);
        }
      };
    
      return (
        
        <div className="UserLoginWrapper">
          <div className="UserLoginFormWrapper">
            <img src={Logo} alt="logo" className="UserLoginFormLogo"></img>
            <h1 className="UserLoginFormHeading">USER LOGIN</h1>
            <form action="" className="UserLoginForm">
              <label
                htmlFor="UserLoginUserNameInput"
                className="UserLoginUserNameInputLabel"
              >
                Email
              </label>
              <input
                type="text"
                className="UserLoginUserNameInput"
                id="UserLoginUserNameInput"
                name="email"
                onChange={handleLoginInput}
              />
              <label
                htmlFor="UserLoginPasswordInput"
                className="UserLoginPasswordInputLabel"
              >
                Password
              </label>
              <input
                type="password"
                className="UserLoginPasswordInput"
                id="UserLoginPasswordInput"
                name="password"
                onChange={handleLoginInput}
              />
            </form>
            {errorMessage && (
              <p className="UserLoginErrorMessage">Invalid username or password</p>
            )}
            <button className="UserLoginButton" onClick={handleSubmit}>
              Login
            </button>
            <p className="UserLoginForgotPasswordLink">Forgot password?</p>
            <p className='UserLoginNoAccount'>Don't have an account? Please <Link to="/user-register">register here</Link></p>
          </div>
        </div>
      );
    };

export default UserLogin
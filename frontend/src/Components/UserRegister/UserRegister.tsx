
import "./UserRegister.css";
// @ts-ignore
import Logo from "./../../Assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UserRegister = () => {
  const [registerData, setRegisterData] = useState({
    id: Math.floor(Math.random() * 100000),
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userName: `User${Math.floor(Math.random() * 100000)}`,
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleRegisterInput = (event) => {
    setRegisterData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3009/user/create-user",
        registerData
      );
        navigate("/user-login");
    } catch (err) {
      console.log(err);
      setErrorMessage(true);
    }
    setRegisterData({
      id: Math.floor(Math.random() * 100000),
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      userName: `User${Math.floor(Math.random() * 100000)}`,
    });
  };

  return (
    <div className="UserRegisterWrapper">
      <div className="UserRegisterFormWrapper">
        <img src={Logo} alt="logo" className="UserRegisterFormLogo"></img>
        <h1 className="UserRegisterFormHeading">USER REGISTRATION</h1>
        <form action="" className="UserRegisterForm">
          <label
            htmlFor="UserRegisterEmailInput"
            className="UserRegisterEmailInputLabel"
          >
            Email
          </label>
          <input
            type="text"
            className="UserRegisterEmailInput"
            id="UserRegisterEmailInput"
            name="email"
            value={registerData.email}
            onChange={handleRegisterInput}
          />
          <label
            htmlFor="UserRegisterUserNameInput"
            className="UserRegisterUserNameInputLabel"
          >
            First Name
          </label>
          <input
            type="text"
            className="UserRegisterUserNameInput"
            id="UserRegisterUserNameInput"
            name="firstName"
            value={registerData.firstName}
            onChange={handleRegisterInput}
          />
          <label
            htmlFor="UserRegisterLastNameInput"
            className="UserRegisterLastNameInputLabel"
          >
            Last Name
          </label>
          <input
            type="text"
            className="UserRegisterLastNameInput"
            id="UserRegisterLastNameInput"
            name="lastName"
            value={registerData.lastName}
            onChange={handleRegisterInput}
          />
          <label
            htmlFor="UserRegisterPasswordInput"
            className="UserRegisterPasswordInputLabel"
          >
            Password
          </label>
          <input
            type="password"
            className="UserRegisterPasswordInput"
            id="UserRegisterPasswordInput"
            name="password"
            value={registerData.password}
            onChange={handleRegisterInput}
          />
        </form>
        {errorMessage && (
          <p className="UserRegisterErrorMessage">
            Invalid / already used email
          </p>
        )}
        <div className="UserRegisterCheckboxWraper">
          <input type="checkbox" id="UserRegisterCheckbox" />
          <label
            htmlFor="UserRegisterCheckbox"
            className="UserRegisterCheckboxText"
          >
            Sign me up for newsletters and special offers
          </label>
        </div>
        <button className="UserRegisterButton" onClick={handleSubmit}>
          Register
        </button>

        <p className="UserRegisterNoAccount">
          Already have an account? Please
          <Link to="/user-login">login here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;

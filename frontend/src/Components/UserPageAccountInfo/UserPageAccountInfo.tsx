import React from "react";
import "./UserPageAccountInfo.css";
import Button from "../ReusableComponents/Button/Button";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import { useState } from "react";
import axios from "axios";

const UserPageAccountInfo = () => {
  const { user } = useActiveSearchContext();
  const [inputData, setInputData] = useState({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
  });
  const [userUpdated, setUserUpdated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((previousFields) => ({
      ...previousFields,
      [name]: value,
    }));
  };

  const fetchUser = async () => {
    try {
      const user = await axios.get(
        `http://localhost:3009/user/get-user/${inputData.email}`
      );
      console.log(user);
      //   updateUser(user.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(
        `http://localhost:3009/user/update-user/${user.id}`,
        inputData
      );
      setUserUpdated(true);
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="UserPageAccountInfoWrapper">
      <h2 className="UserPageAccountInfoHeading">Account</h2>
      <div className="UserPageAccountInfo">
        <div className="UserPageAccountInfoItemWrapper">
          <label htmlFor="email" className="UserPageAccountInfoItemLabel">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={inputData.email}
            className="UserPageAccountInfoItemInput"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="UserPageAccountInfoItemWrapper">
          <label htmlFor="firstName" className="UserPageAccountInfoItemLabel">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            value={inputData.firstName}
            className="UserPageAccountInfoItemInput"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="UserPageAccountInfoItemWrapper">
          <label htmlFor="lastName" className="UserPageAccountInfoItemLabel">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            value={inputData.lastName}
            className="UserPageAccountInfoItemInput"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="UserPageAccountInfoItemWrapper">
          <label htmlFor="password" className="UserPageAccountInfoItemLabel">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="UserPageAccountInfoItemInput"
            onChange={handleInputChange}
          ></input>
        </div>
        <Button text="Submit updated user info" onClick={updateUser} />
        {userUpdated && (
          <p className="UserPageAccountInfoUpdatedMessage">User updated</p>
        )}
        <button className="UserPageAccountInfoDeleteButton">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserPageAccountInfo;

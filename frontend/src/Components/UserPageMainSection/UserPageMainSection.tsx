import React from "react";
import "./UserPageMainSection.css";
import UserPageOrderList from "../UserPageOrderList/UserPageOrderList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";

const UserPageMainSection = () => {

  const navigate = useNavigate();
  const {updateUser} = useActiveSearchContext()

  const logOutUser = async () => {
    try {
      await axios.post("http://localhost:3009/user/logout");
      localStorage.removeItem("username");
      navigate("/user-login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="UserPageMainSectionWrapper">
      <div className="UserPageSideBar">
        <h3 className="UserPageSideBarHeading">MY ACCOUNT</h3>
        <button className="UserPageSideBarLink">My Orders</button>
        <button className="UserPageSideBarLink">Favourites</button>
        <button className="UserPageSideBarLink">Account information</button>
        <button className="UserPageSideBarLink LogOut" onClick={logOutUser}>
          LOG OUT
        </button>
      </div>
      <div className="UserPageInfoSection">
        <UserPageOrderList />
      </div>
    </div>
  );
};

export default UserPageMainSection;

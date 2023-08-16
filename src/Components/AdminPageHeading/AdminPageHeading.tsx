import React from "react";
import "./AdminPageHeading.css";
import Button from "../ReusableComponents/Button/Button";
import {Link} from 'react-router-dom'

const AdminPageHeading = () => {
  return (
    <div className="AdminPageHeadingWrapper">
      <h1 className="AdminPageHeading">Welcome to ACCENT products admin page</h1>
      <Button text="ADD NEW PRODUCT" />
      <button className="AdminPageCloseButton"><Link to="/" className="HeaderNavbarAnchor">BACK TO HOMEPAGE</Link></button>
    </div>
  );
};

export default AdminPageHeading;

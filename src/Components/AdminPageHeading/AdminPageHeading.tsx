import React from "react";
import "./AdminPageHeading.css";
import Button from "../ReusableComponents/Button/Button";

const AdminPageHeading = () => {
  return (
    <div className="AdminPageHeadingWrapper">
      <h1 className="AdminPageHeading">Welcome to ACCENT products admin page</h1>
      <Button text="ADD NEW PRODUCT" />
      
    </div>
  );
};

export default AdminPageHeading;

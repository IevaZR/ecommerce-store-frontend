import React from "react";
import './AdminPageHeading.css'
import Button from "../ReusableComponents/Button/Button";

const AdminPageHeading = () => {
  return (
    <div className="AdminPageHeadingWrapper">
      <h1 className="AdminPageHeading">Welcome to ACCENT product admin page</h1>
      <Button text="ADD NEW PRODUCT"/>
      <div className="AdminProductCardHeaderWrapper">
      <div className="AdminProductCardImageWrapper"></div>
      <div className="AdminProductCardTitle">TITLE</div>
      <div className="AdminProductCardCategory">CATEGORY</div>
      <div className="AdminProductCardPrice">PRICE</div>
      <div className="AdminProductCardQuantity">REMAINING</div>
      <div>
      </div>
    </div>
    </div>
  );
};

export default AdminPageHeading;

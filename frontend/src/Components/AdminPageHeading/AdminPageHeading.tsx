import React from "react";
import "./AdminPageHeading.css";
import { Link } from "react-router-dom";

const AdminPageHeading = () => {

  return (
    <div className="AdminPageHeadingWrapper">
      <h1 className="AdminPageHeading">
        Welcome to ACCENT products admin page
      </h1>
      <button className="AdminPageCloseButton">
        <Link to="/" className="HeaderNavbarAnchor">
          BACK TO HOMEPAGE
        </Link>
      </button>
    </div>
  );
};

export default AdminPageHeading;

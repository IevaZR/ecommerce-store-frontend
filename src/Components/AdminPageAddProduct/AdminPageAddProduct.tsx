import React from "react";
import "./AdminPageAddProduct.css";
import Button from "../ReusableComponents/Button/Button";

const AdminPageAddProduct = () => {
  return (
    <div className="AdminPageAddProductWrapper">
      <div className="AdminPageAddProductFormWrapper">
        <div className="AdminPageAddProductHeadingWrapper">
          <h3 className="AdminPageAddProductHeading">
            Please fill out the form below to add a new product
          </h3>
        </div>

        <form className="AdminPageAddProductsForm">
          <label className="AdminPageAddProductsLabel">TITLE</label>
          <input className="AdminPageAddProductsInput" placeholder="TITLE" />
          <label className="AdminPageAddProductsLabel">CATEGORY</label>
          <input className="AdminPageAddProductsInput" placeholder="CATEGORY" />
          <label className="AdminPageAddProductsLabel">PRICE</label>
          <input className="AdminPageAddProductsInput" placeholder="PRICE" />
          <label className="AdminPageAddProductsLabel">DESCRIPTION</label>
          <input
            className="AdminPageAddProductsInput"
            placeholder="DESCRIPTION"
          />
          <label className="AdminPageAddProductsLabel">COLOR</label>
          <input className="AdminPageAddProductsInput" placeholder="COLOR" />
          <label className="AdminPageAddProductsLabel">QUANTITY</label>
          <input className="AdminPageAddProductsInput" placeholder="QUANTITY" />
          <label className="AdminPageAddProductsLabel">DIMENSIONS CM</label>
          <div className="AdminPageAddProductsDimensionsWrapper">
            <label className="AdminPageAddProductsLabel">WIDTH</label>
            <input
              className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
              placeholder="DIMENSIONS CM"
            />
            <label className="AdminPageAddProductsLabel">HEIGHT</label>
            <input
              className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
              placeholder="DIMENSIONS CM"
            />
            <label className="AdminPageAddProductsLabel">DEPTH</label>
            <input
              className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
              placeholder="DIMENSIONS CM"
            />
          </div>

          <label className="AdminPageAddProductsLabel">FEATURES</label>
          <input className="AdminPageAddProductsInput" placeholder="FEATURES" />
          <label className="AdminPageAddProductsLabel">KEYWORDS</label>
          <input className="AdminPageAddProductsInput" placeholder="KEYWORDS" />
          <label className="AdminPageAddProductsLabel">IMAGE</label>
          <input className="AdminPageAddProductsInput" placeholder="IMAGE" />
          <div className="AdminPageAddProductsButtonWrapper">
            <Button text="ADD" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPageAddProduct;

//TODO: finish the add product component as popup

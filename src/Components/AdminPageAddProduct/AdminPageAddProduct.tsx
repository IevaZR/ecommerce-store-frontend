import React from "react";
import "./AdminPageAddProduct.css";

const AdminPageAddProduct = () => {
  return (
    <div className="AdminPageAddProductWrapper">
      <div className="AdminPageAddProductFormWrapper">
        <h3 className="AdminPageAddProductHeading">
          To add a new product, please fill out the form below
        </h3>
        <form className="AdminPageAddProductsForm">
          <label className="AdminPageAddProductsLabel">TITLE</label>
          <input className="AdminPageAddProductsInput" placeholder="TITLE"/>
          <label className="AdminPageAddProductsLabel">CATEGORY</label>
          <input className="AdminPageAddProductsInput" placeholder="CATEGORY"/>
          <label className="AdminPageAddProductsLabel">PRICE</label>
          <input className="AdminPageAddProductsInput" placeholder="PRICE"/>
          <label className="AdminPageAddProductsLabel">DESCRIPTION</label>
          <input className="AdminPageAddProductsInput" placeholder="DESCRIPTION"/>
          <label className="AdminPageAddProductsLabel">COLOR</label>
          <input className="AdminPageAddProductsInput" placeholder="COLOR"/>
          <label className="AdminPageAddProductsLabel">QUANTITY</label>
          <input className="AdminPageAddProductsInput" placeholder="QUANTITY"/>
          <label className="AdminPageAddProductsLabel">DIMENSIONS CM</label>
          <input className="AdminPageAddProductsInput" placeholder="DIMENSIONS CM"/>
          <label className="AdminPageAddProductsLabel">FEATURES</label>
          <input className="AdminPageAddProductsInput" placeholder="FEATURES"/>
          <label className="AdminPageAddProductsLabel">KEYWORDS</label>
          <input className="AdminPageAddProductsInput" placeholder="KEYWORDS"/>
          <label className="AdminPageAddProductsLabel">IMAGE</label>
          <input className="AdminPageAddProductsInput" placeholder="IMAGE"/>
          <button className="AdminPageAssProductsButton">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPageAddProduct;

//TODO: finish the add product component as popup

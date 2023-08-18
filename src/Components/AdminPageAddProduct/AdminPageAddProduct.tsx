import React from "react";
import "./AdminPageAddProduct.css";
import Button from "../ReusableComponents/Button/Button";
import { useAddProductVisibility } from "../../HelperFunctions/AddProductVisibilityContext";

const AdminPageAddProduct = () => {
  const { isAddProductVisible, toggleAddProductVisible } =
    useAddProductVisibility();

    const closeAddProductForm = () => {
      toggleAddProductVisible(false)
    }

  return (
    <>
      {" "}
      {isAddProductVisible && (
        <div className="AdminPageAddProductWrapper">
          <div className="AdminPageAddProductFormWrapper">
            <div className="AdminPageAddProductHeadingWrapper">
              <h3 className="AdminPageAddProductHeading">
                Please fill out the form below to add a new product
              </h3>
            </div>

            <form className="AdminPageAddProductsForm">
              <label className="AdminPageAddProductsLabel">TITLE</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="TITLE"
              />
              <label className="AdminPageAddProductsLabel">CATEGORY</label>
              <select
                name="category"
                id=""
                className="AdminPageAddProductsInput AdminPageAddProductsSelect"
              >
                <option value="0">---</option>
                <option value="1">Sofas</option>
                <option value="2">Chairs</option>
                <option value="3">Tables</option>
                <option value="4">Beds</option>
              </select>
              <label className="AdminPageAddProductsLabel">PRICE</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="PRICE"
              />
              <label className="AdminPageAddProductsLabel">DISCOUNT</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="DISCOUNT"
              />
              <label className="AdminPageAddProductsLabel">DESCRIPTION</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="DESCRIPTION"
              />
              <label className="AdminPageAddProductsLabel">COLOR</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="COLOR"
              />
              <label className="AdminPageAddProductsLabel">QUANTITY</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="QUANTITY"
              />
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
              <div className="AdminPageAddProductsFeaturesWrapper">
                <label className="AdminPageAddProductsLabel">
                  FEATURE TITLE 1
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURE TITLE"
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 1
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                />
                <label className="AdminPageAddProductsLabel">
                  FEATURE TITLE 2
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURE TITLE"
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 2
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                />
                <label className="AdminPageAddProductsLabel">
                  FEATURE TITLE 3
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURE TITLE"
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 3
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                />
              </div>
              <label className="AdminPageAddProductsLabel">KEYWORDS</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="KEYWORDS"
              />
              <label className="AdminPageAddProductsLabel">IMAGE URL</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="IMAGE"
              />
              <div className="AdminPageAddProductsButtonWrapper">
                <div className="AdminPageAddProductButtonWrapper">
                  <Button text="ADD PRODUCT TO DATABASE" />
                </div>
                <div className="AdminPageAddProductButtonWrapper">
                  <Button text="CLOSE FORM" onClick={closeAddProductForm}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPageAddProduct;

//TODO: finish the add product component as popup
//TODO: style select field

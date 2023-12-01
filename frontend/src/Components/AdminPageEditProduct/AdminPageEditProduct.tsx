import React from "react";
import "./AdminPageEditProduct.css";
import Button from "../ReusableComponents/Button/Button";
import { useEditProductVisibility } from "../../HelperFunctions/EditProductVisibilityContext";
import axios from "axios";
import { useState, useEffect } from "react";
import AdminPageProductAddedMessage from "../AdminPageProductAddedMessage/AdminPageProductAddedMessage";
import { useEditProduct } from "../../HelperFunctions/EditProductContext";

const AdminPageEditProduct = () => {
  const { isEditProductVisible, toggleEditProductVisible } =
    useEditProductVisibility();
  const { editingProduct, productUpdated, setProductUpdated } = useEditProduct();

  const [productAdded, setProductAdded] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const closeAddProductForm = () => {
    toggleEditProductVisible(false);
    setEmptyFields(false);
    setEditProductInputFields(editingProductInputFieldInitialState);
  };

  const resetProductAddedValue = () => {
    setProductAdded(false);
    setEmptyFields(false);
    setEditProductInputFields(editingProductInputFieldInitialState);
    toggleEditProductVisible(false);
  };

  let editingProductInputFieldInitialState = {
    id: editingProduct?.id || "",
    title: editingProduct?.title || "",
    category: editingProduct?.category || "---",
    price: editingProduct?.price || "",
    discount: editingProduct?.discount || "",
    description: editingProduct?.description || "",
    color: editingProduct?.color || "",
    quantity: editingProduct?.quantity || "",
    dimensionsCm: {
      width: editingProduct?.dimensionsCm?.width || "",
      height: editingProduct?.dimensionsCm?.height || "",
      depth: editingProduct?.dimensionsCm?.depth || "",
    },
    features: [
      {
        featureTitle: editingProduct?.features[0]?.featureTitle || "",
        featureParagraph: editingProduct?.features[0]?.featureParagraph || "",
      },
      {
        featureTitle: editingProduct?.features[1]?.featureTitle || "",
        featureParagraph: editingProduct?.features[0]?.featureParagraph || "",
      },
      {
        featureTitle: editingProduct?.features[1]?.featureTitle || "",
        featureParagraph: editingProduct?.features[0]?.featureParagraph || "",
      },
    ],
    keywords: editingProduct?.keywords || "",
    image: editingProduct?.image || "",
  };

  
  const [editProductInputFields, setEditProductInputFields] = useState(
    editingProductInputFieldInitialState
  );
  
  useEffect(() => {
    setEditProductInputFields(editingProductInputFieldInitialState);
  }, [editingProduct]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "width" || name === "height" || name === "depth") {
      setEditProductInputFields((previousFields) => ({
        ...previousFields,
        dimensionsCm: {
          ...previousFields.dimensionsCm,
          [name]: value,
        },
      }));
    } else if (
      name === "featureTitle1" ||
      name === "featureDescription1" ||
      name === "featureTitle2" ||
      name === "featureDescription2" ||
      name === "featureTitle3" ||
      name === "featureDescription3"
    ) {
      const featureIndex = parseInt(name.charAt(name.length - 1)) - 1;
      const featureProperty = name.includes("Title")
        ? "featureTitle"
        : "featureParagraph";

      setEditProductInputFields((previousFields) => {
        const updatedFeatures = [...previousFields.features];
        updatedFeatures[featureIndex] = {
          ...updatedFeatures[featureIndex],
          [featureProperty]: value,
        };

        return {
          ...previousFields,
          features: updatedFeatures,
        };
      });
    } else {
      setEditProductInputFields((previousFields) => ({
        ...previousFields,
        [name]: value,
      }));
    }
  };

  const updateProductInDatabase = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    try {
      await axios.put(
        `${backendUrl}/update/${editingProduct.id}`,
        editProductInputFields
      );
      setProductAdded(true);
      setEmptyFields(false);
      setProductUpdated(!productUpdated)
    } catch (err) {
      console.log(err);
      setEmptyFields(true);
    }
  };

  return (
    <>
      {isEditProductVisible && (
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
                name="title"
                value={editProductInputFields.title}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">CATEGORY</label>
              <select
                name="category"
                value={editProductInputFields.category}
                id=""
                className="AdminPageAddProductsInput AdminPageAddProductsSelect"
                onChange={handleInputChange}
              >
                <option value="---">---</option>
                <option value="sofas">Sofas</option>
                <option value="chairs">Chairs</option>
                <option value="tables">Tables</option>
                <option value="beds">Beds</option>
              </select>
              <label className="AdminPageAddProductsLabel">PRICE</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="PRICE"
                name="price"
                value={editProductInputFields.price}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">DISCOUNT</label>
              <p className="AdminPageAddProductsNotRequiredText">
                NOT REQUIRED
              </p>
              <input
                className="AdminPageAddProductsInput"
                placeholder="DISCOUNT"
                name="discount"
                value={editProductInputFields.discount}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">DESCRIPTION</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="DESCRIPTION"
                name="description"
                value={editProductInputFields.description}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">COLOR</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="COLOR"
                name="color"
                value={editProductInputFields.color}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">QUANTITY</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="QUANTITY"
                name="quantity"
                value={editProductInputFields.quantity}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">DIMENSIONS CM</label>
              <div className="AdminPageAddProductsDimensionsWrapper">
                <label className="AdminPageAddProductsLabel">WIDTH</label>
                <input
                  className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
                  name="width"
                  value={editProductInputFields.dimensionsCm.width}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">HEIGHT</label>
                <input
                  className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
                  name="height"
                  value={editProductInputFields.dimensionsCm.height}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">DEPTH</label>
                <input
                  className="AdminPageAddProductsInput AdminPageAddProductsInputDimensions"
                  name="depth"
                  value={editProductInputFields.dimensionsCm.depth}
                  onChange={handleInputChange}
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
                  name="featureTitle1"
                  value={editProductInputFields.features[0].featureTitle}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 1
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                  name="featureDescription1"
                  value={editProductInputFields.features[0].featureParagraph}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">
                  FEATURE TITLE 2
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURE TITLE"
                  name="featureTitle2"
                  value={editProductInputFields.features[1].featureTitle}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 2
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                  name="featureDescription2"
                  value={editProductInputFields.features[1].featureParagraph}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">
                  FEATURE TITLE 3
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURE TITLE"
                  name="featureTitle3"
                  value={editProductInputFields.features[2].featureTitle}
                  onChange={handleInputChange}
                />
                <label className="AdminPageAddProductsLabel">
                  DESCRIPTION 3
                </label>
                <input
                  className="AdminPageAddProductsInput"
                  placeholder="FEATURES"
                  name="featureDescription3"
                  value={editProductInputFields.features[2].featureParagraph}
                  onChange={handleInputChange}
                />
              </div>
              <label className="AdminPageAddProductsLabel">KEYWORDS</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="KEYWORDS"
                name="keywords"
                value={editProductInputFields.keywords}
                onChange={handleInputChange}
              />
              <label className="AdminPageAddProductsLabel">IMAGE URL</label>
              <input
                className="AdminPageAddProductsInput"
                placeholder="IMAGE"
                name="image"
                value={editProductInputFields.image}
                onChange={handleInputChange}
              />
              {emptyFields && (
                <p className="AdminPageAddProductsEmptyFieldsMessage">
                  PLEASE FILL ALL REQUIRED FIELDS
                </p>
              )}

              <div className="AdminPageAddProductsButtonWrapper">
                <div className="AdminPageAddProductButtonWrapper">
                  <Button
                    text="UPDATE PRODUCT"
                    onClick={updateProductInDatabase}
                  />
                </div>
                <div className="AdminPageAddProductButtonWrapper">
                  <Button text="CLOSE FORM" onClick={closeAddProductForm} />
                </div>
              </div>
            </form>
          </div>
          {productAdded && (
            <AdminPageProductAddedMessage
              closeMessage={resetProductAddedValue}
              message={`${editProductInputFields.title} successfully updated!`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AdminPageEditProduct;

//TODO: style select field
//TODO: clean up code

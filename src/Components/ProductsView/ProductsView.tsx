import React from "react";
import "./ProductsView.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../ProductList/ProductList";
import { useRef, useEffect } from "react";
import Filter2 from "../Filter2/Filter2"

const ProductsView = () => {
  const { activeSearch, searchQuery, showAllProducts } = useActiveSearchContext();

  const productViewRef = useRef(null);

  useEffect(() => {
    if (activeSearch) {
      scrollToProductView();
    }
  }, [activeSearch]);

  useEffect(() => {
    if (showAllProducts) {
      scrollToProductView();
    }
  }, [showAllProducts]);

  const scrollToProductView = () => {
    if (productViewRef.current) {
      productViewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="ProductView" ref={productViewRef} className="ProductViewWrapper">
      <div className="ProductViewHeadingWrapper">
        <h2 className="ProductViewHeading">Our Products</h2>
      </div>
      <Filter2 />
      {(activeSearch && !showAllProducts) ? (
        <ProductList searchQuery={searchQuery} />
      ) : (
        <ProductList searchQuery="" />
      )}
    </div>
  );
};

export default ProductsView;

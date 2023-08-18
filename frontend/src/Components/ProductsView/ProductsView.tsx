import React from "react";
import "./ProductsView.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../ProductList/ProductList";
import Filter2 from "../Filter2/Filter2"

const ProductsView = () => {
  const { activeSearch, searchQuery, showAllProducts } = useActiveSearchContext();

  

  return (
    <div className="ProductViewWrapper">
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

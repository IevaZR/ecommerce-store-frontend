import React from "react";
import "./ProductsView.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../ProductList/ProductList";
import {useRef, useEffect} from 'react'


const ProductsView = () => {
    const {activeSearch, searchQuery} = useActiveSearchContext()

    const productViewRef = useRef(null);

  useEffect(() => {
    if (activeSearch) {
      scrollToProductView();
    }
  }, [activeSearch]);

  const scrollToProductView = () => {
    if (productViewRef.current) {
      productViewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="ProductView" ref={productViewRef} className="ProductViewWrapper">
      <div className="ProductViewHeadingWrapper"><h2 className="ProductViewHeading">Our Products</h2></div>
      {activeSearch
      ?(<ProductList searchQuery={searchQuery}/>)
      :(<ProductList searchQuery=""/>) }
    </div>
  );
};

export default ProductsView;

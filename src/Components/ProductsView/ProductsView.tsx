import React from "react";
import "./ProductsView.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../ProductList/ProductList";


const ProductsView = () => {
    const {activeSearch, searchQuery} = useActiveSearchContext()

  return (
    <div id="ProductView">
      {activeSearch
      ?(<ProductList searchQuery={searchQuery}/>)
      :(<ProductList searchQuery=""/>) }
    </div>
  );
};

export default ProductsView;

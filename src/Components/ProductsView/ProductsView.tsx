import React from "react";
import "./ProductsView.css";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
import ProductList from "../ProductList/ProductList";
import { FurnitureData } from "../../data/data";


const ProductsView = () => {
    const {activeSearch, searchQuery} = useActiveSearchContext()

    const filteredFurnitureList = FurnitureData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))

  return (
    <div id="ProductView">
      {activeSearch
      ?(<div>
        {filteredFurnitureList.map((item) => (
            <div key={item.id}>
              {/* Display the filtered data */}
              {item.title} - {item.price}
              </div>
          ))}
      </div>)
      :(<ProductList/>) }
    </div>
  );
};

export default ProductsView;

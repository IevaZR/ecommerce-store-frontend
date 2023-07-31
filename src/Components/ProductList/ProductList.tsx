import ProductCard from "../ProductCard/ProductCard";
import "./ProducrList.css";
import { FurnitureData } from "../../data/data";
import { useState, useEffect } from "react";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState(FurnitureData);
  // console.log(products);
  const [visibleProducts, setVisibleProducts] = useState(8);

  //---FOR SEARCH BY SEARCH QUERY------

const filterBySearchQuery = (data, query) => {
    return data.filter((item) => {
        for(const key in item) {
            const value = item[key];
            if (typeof value === "string" && value.toLowerCase().includes(query.toLowerCase())) {
                return true
            } else if (typeof value === "object" && value !== null) {
                if(Array.isArray(value)) {
                    if (value.some((element) => filterBySearchQuery([element], query).length > 0)) {
                       return true 
                    }
                } else {
                    if (filterBySearchQuery([value], query). length > 0) {
                        return true
                    }
                }
            }
        }
        return false
    })
}

  useEffect(() => {
    const filteredProducts = filterBySearchQuery(FurnitureData, searchQuery)
    setProducts(filteredProducts);
  }, [searchQuery]);
  //------------------

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const productsToShow = products.slice(0, visibleProducts);

  return (
    <div className="ProductListWrapper">
      <div className="ProductListContent">
        {productsToShow.map((product) => (
          <ProductCard key={product.id} productList={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button onClick={handleLoadMore} className="LoadMoreButton">
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;

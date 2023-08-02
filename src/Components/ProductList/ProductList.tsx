import ProductCard from "../ProductCard/ProductCard";
import "./ProducrList.css";
import { FurnitureData } from "../../data/data";
import { useState, useEffect, useMemo } from "react";

const ProductList = ({ searchQuery }) => {
    const [products, setProducts] = useState(FurnitureData);
    // console.log(products);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [productsFound, setProductsFound] = useState(true); 


    //---FOR SEARCH BY SEARCH QUERY------
    const filterBySearchQuery = (data, query) => {
        const regex = new RegExp(`\\b${query}\\b`, 'i');
        return data.filter((item) => {
            for (const key in item) {
                const value = item[key];
                if (
                    typeof value === "string" && regex.test(value)
                ) {
                    return true;
                } else if (typeof value === "object" && value !== null) {
                    if (Array.isArray(value)) {
                        if (
                            value.some(
                                (element) => filterBySearchQuery([element], query).length > 0
                            )
                        ) {
                            return true;
                        }
                    } else {
                        if (filterBySearchQuery([value], query).length > 0) {
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    };

    const filteredProducts = useMemo(
        () => filterBySearchQuery(FurnitureData, searchQuery),
        [FurnitureData, searchQuery]
    );

    useEffect(() => {
        if (filteredProducts.length === 0) {
            setProductsFound(false);
          } else {
            setProductsFound(true);
            setProducts(filteredProducts);
          }
        }, [filteredProducts]);
    //--------END OF SEARCH BY SEARCH QUERY----------

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
    };

    const productsToShow = products.slice(0, visibleProducts);

    return (
        <div className="ProductListWrapper">
             {productsFound ? (
            <div className="ProductListContent">
                {productsToShow.map((product) => (
                    <ProductCard key={product.id} productList={product} />
                ))}
            </div>
            ) : (
                <div className="ProductsNotFoundWrapper">
                <p>Sorry, nothing was found</p>
              </div>
            )}
            {visibleProducts < products.length && (
                <button onClick={handleLoadMore} className="LoadMoreButton">
                    Load More
                </button>
            )}
        </div>
    );
};

export default ProductList;
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { FurnitureData } from "../../data/data";
import { useState, useEffect, useMemo } from "react";

const ProductList = ({ searchQuery }) => {
    const [products, setProducts] = useState(FurnitureData);
    // console.log(products);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    //Line 10 for filter


    //---FOR SEARCH BY SEARCH QUERY------
    const filterBySearchQuery = (data, query) => {
        return data.filter((item) => {
            for (const key in item) {
                const value = item[key];
                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query.toLowerCase())
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
        setProducts(filteredProducts);
    }, [filteredProducts]);
    //--------END OF SEARCH BY SEARCH QUERY----------
    
    //--------START OF FILTER------------------------
    const filterByCategory = (data, category) => {
        if (!category) {
          return data;
        }
        return data.filter((item) => item.category.toLowerCase() === category);
      };
    
      useEffect(() => {
        const filteredProductsByCategory = filterByCategory(FurnitureData, selectedCategory);
        setProducts(filterBySearchQuery(filteredProductsByCategory, searchQuery));
      }, [selectedCategory, searchQuery]);
    
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };
    //--------END OF FILTER--------------------------

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
    };

    const productsToShow = products.slice(0, visibleProducts);



    return (
        <>
            <ul>
                <li onClick={() => handleCategoryClick("sofas")}>Sofas</li>
                <li onClick={() => handleCategoryClick("chairs")}>Chairs</li>
                <li onClick={() => handleCategoryClick("tables")}>Tables</li>
                <li onClick={() => handleCategoryClick("beds")}>Beds</li>
            </ul>

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
        </>
    );
};

export default ProductList;
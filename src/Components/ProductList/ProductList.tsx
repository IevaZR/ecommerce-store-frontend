import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { FurnitureData } from "../../data/data";
import { useState, useEffect, useMemo } from "react";
import { useFilterContext } from "../../HelperFunctions/FilterContext";

const ProductList = ({ searchQuery }) => {
    // START Filter
    const { selectedFilter } = useFilterContext();
    // END Filter
    const [products, setProducts] = useState(FurnitureData);
    // console.log(products);
    const [visibleProducts, setVisibleProducts] = useState(8);
    //Line 11 for filter without useState or useContext
    //const [selectedCategory, setSelectedCategory] = useState(null);
    // START Filter
    const [productsFound, setProductsFound] = useState(true);
    // END Filter


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
        const filteredProductsByCategory = filterByCategory(FurnitureData, selectedFilter);
        const filteredProducts = filterBySearchQuery(filteredProductsByCategory, searchQuery);
        if (filteredProducts.length === 0) {
            setProductsFound(false);
        } else {
            setProductsFound(true);
            setProducts(filteredProducts);
        }
    }, [selectedFilter, searchQuery]);
    //--------END OF FILTER--------------------------


    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
    };

    const productsToShow = products.slice(0, visibleProducts);



    return (
        <>
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
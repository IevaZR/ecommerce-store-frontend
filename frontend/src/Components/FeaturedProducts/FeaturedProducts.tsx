import React, { useState, useEffect } from 'react';
import './FeaturedProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await axios.get('http://localhost:3009/get-all');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    handleFetch();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      getRandomProducts();
    }
  }, [products]);

  const getRandomProducts = () => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    const randomProductsSlice = shuffledProducts.slice(0, visibleProducts);
    setRandomProducts(randomProductsSlice);
  };

  return (
    <div className="FeaturedProductViewWrapper">
      <div className="FeaturedProductViewHeadingWrapper">
        <h2 className="FeaturedProductViewHeading">Featured Products</h2>
      </div>
      <div className="FeaturedProductListContentWrapper">
        <div className="FeaturedProductListContent">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} productList={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
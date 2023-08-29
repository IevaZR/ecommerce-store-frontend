import React, { useEffect, useReducer, useState } from "react";
import "./Advertisement.css";
import Button from "../ReusableComponents/Button/Button";
import { useActiveSearchContext } from "../../HelperFunctions/ActiveSearchContext";
//import { Furniture } from '../../types/types';
//import { FurnitureData } from '../../data/data'; // Import the furnitureData from data.ts
import axios from "axios";
//import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

//for external data loading START
const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
//for external data loading END

const Advertisement = () => {
  const [products, dispatch] = useReducer(reducer, initialState);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const { updateActiveSearch, updateShowAllProducts } = useActiveSearchContext();
  const [randomProduct, setRandomProduct] = useState(null);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await axios.get(`http://localhost:3009/get-all`);
        dispatch({ type: "SUCCESS", payload: response.data });

        const filteredProducts = response.data.filter(
          (product) => product.discount > 0
        );
        setDiscountedProducts(filteredProducts);
      } catch (err) {
        dispatch({ type: "FAILURE", payload: err.message });
      }
    };

    handleFetch();
  }, []);

  // Pick a random FurnitureData item from the imported data
  const getRandomProduct = () => {
    if (discountedProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * discountedProducts.length);
      setRandomProduct(discountedProducts[randomIndex]);
      setSlideIn(true);

      // Reset the animation after 2.5 seconds to slide the advertisement out
      setTimeout(() => {
        setSlideIn(false);
      }, 5000);
    }
  };

  useEffect(() => {
    getRandomProduct();

    // Set an interval to change the advertisement every 3 seconds
    const interval = setInterval(getRandomProduct, 8000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [discountedProducts]);

  const showAllProducts = () => {
    updateShowAllProducts(true);
    updateActiveSearch(false)
  };

  return (
    randomProduct && (
      <div className="AdvertisementSectionBlock">
      <div
        className={`AdvertisementSectionWrapper ${slideIn ? "slideIn" : ""}`}
      >
        <div className="AdvertisementSectionImageWrapper">
          <img
            src={randomProduct.image}
            alt="furniture"
            className="AdvertisementSectionImage"
          />
          <div className="AdvertisementSectionImageDiscountWrapper">
            <div className="AdvertisementSectionImageDiscountLayer">
              <div className="AdvertisementSectionImageDiscount">
                <p>SAVE</p>
                <p>{`${(randomProduct.discount * 100).toFixed(0)}%`}</p>
              </div>
            </div>
    </div>
        </div>
        <div className="AdvertisementSectionHeadingWrapper">
          <h1 className="AdvertisementSectionHeading">{randomProduct.title}</h1>
          <p className="AdvertisementSectionParagraph">
            {randomProduct.features[1].featureParagraph}
          </p>
          <Link to="/shop" className="HeaderNavbarAnchor">
            <Button text="Shop Now" onClick={showAllProducts}></Button>
          </Link>
        </div>
      </div>
      </div>
    )
  );
};

export default Advertisement;

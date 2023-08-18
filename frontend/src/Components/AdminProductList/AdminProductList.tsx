import "./AdminProductList.css";
import { useState, useEffect, useReducer } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";
import axios from "axios";

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
    case "ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const AdminProductList = () => {
  const [products, dispatch] = useReducer(reducer, initialState);

  const handleFetch = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await axios.get("http://localhost:3009/get-all");
      dispatch({ type: "SUCCESS", payload: data });
      console.log(data);
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="AdminProductListWrapper">
      {products?.data?.data?.map((product) => (
        <AdminProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AdminProductList;

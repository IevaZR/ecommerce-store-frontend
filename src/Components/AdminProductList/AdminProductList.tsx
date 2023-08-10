import "./AdminProductList.css";
import { FurnitureData } from "../../data/data";
import { useState } from "react";
import AdminProductCard from "../AdminProductCard/AdminProductCard";

const AdminProductList = () => {
  const [products] = useState(FurnitureData);

  return (
    <div className="AdminProductListWrapper">
      {products.map((product) => (
        <AdminProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AdminProductList;

import React from "react";
import "./AdminPageOrderList.css";
import AdminPageOrderCard from "../AdminPageOrderCard/AdminPageOrderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useOrderFilterContext } from "../../HelperFunctions/OrderFilterContext";
import { useAdminVisibleContentContex } from "../../HelperFunctions/AdminVisibleContentContext";

const AdminPageOrderList = () => {
  const [orders, setOrders] = useState([]);
  const { orderFilterStatus } = useOrderFilterContext();
  const { adminVisibleContent } = useAdminVisibleContentContex();

  const fetchOrders = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    try {
      const response = await axios.get(
        `${backendUrl}/order/get-all-orders`
      );
      setOrders(response.data);
      console.log(orders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders =
    orderFilterStatus === "All"
      ? orders
      : orders.filter((order) => order.orderStatus === orderFilterStatus);

  filteredOrders.sort((a, b) => {
    if (a.orderStatus === "Active" && b.orderStatus === "Fulfilled") {
      return -1;
    }
    if (a.orderStatus === "Fulfilled" && b.orderStatus === "Active") {
      return 1;
    }
    return 0;
  });

  return (
    adminVisibleContent === "orders" && (
      <div className="AdminPageOrderListWrapper">
        {filteredOrders.map((order) => (
          <AdminPageOrderCard
            key={order.id}
            order={order}
            updateOrderList={fetchOrders}
          />
        ))}
      </div>
    )
  );
};

export default AdminPageOrderList;

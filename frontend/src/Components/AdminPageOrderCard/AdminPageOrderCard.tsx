import React from "react";
import "./AdminPageOrderCard.css";
import axios from "axios";

const AdminPageOrderCard = ({ order, updateOrderList }) => {
  const calculateOrderTotal = (orderedProducts) => {
    let total = 0;

    for (const product of orderedProducts) {
      const productTotal = product.product.price * product.product.quantity;
      total += productTotal;
    }

    return total;
  };

  const changeOrderStatus = async() => {
    try {
        await axios.put(
          `http://localhost:3009/order/update-order/${order.id}`,
          {orderStatus:"Fulfilled"}
          
        );
        updateOrderList()
      } catch (err) {
        console.log(err);
      }
  }

  return (
    <div className="AdminPageOrderCardWrapper">
      <div className="AdminPageOrderCardOrderNumberWrapper">
        <h5
          className={
            order.orderStatus === "Active"
              ? "AdminPageOrderCardOrderNumber"
              : "AdminPageOrderCardOrderNumberFulfilled"
          }
        >
          Order no. {order.orderNumber} | {order.orderStatus}
        </h5>
        <button className="AdminPageOrderCardCompleteButton" onClick={changeOrderStatus}>
          MARK AS COMPLETE
        </button>
      </div>
      <div className="AdminPageOrderCardMainSectionWrapper">
        <div className="AdminPageOrderCardCustomerDetailWrapper">
          <h6 className="AdminPageOrderCardCustomerName">
            {order.customer.name}
          </h6>
          <p className="AdminPageOrderCardCustomerEmail">
            {order.customer.email}
          </p>
          <p className="AdminPageOrderCardCustomerAddress">
            {order.customer.address}
          </p>
          <p className="AdminPageOrderCardCustomerSum">
            Order total: EUR{" "}
            {calculateOrderTotal(order.orderedProducts).toFixed(2)}
          </p>
        </div>
        <div className="AdminPageOrderCardPurchasedProductsSectionWrapper">
          {order.orderedProducts.map((product) => (
            <div
              className="AdminPageOrderCardPurchasedProductWrapper"
              key={product._id}
            >
              <div className="AdminPageOrderCardPurchasedProductsImageWrapper">
                <img
                  src={product.product.image}
                  alt=""
                  className="AdminPageOrderCardPurchasedProductsImage"
                />
              </div>
              <div className="AdminPageOrderCardPurchasedProductsInfoWrapper">
                <p>{product.product.name}</p>
                <p>Quantity: {product.product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPageOrderCard;

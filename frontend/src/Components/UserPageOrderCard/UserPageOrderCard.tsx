import React from "react";
import "./UserPageOrderCard.css";

const UserPageOrderCard = () => {
  return (
    <div className="UserPageOrderCardWrapper">
      <div className="UserPageOrderCardOrderNumberWrapper">
        <h5 className="UserPageOrderCardOrderNumber">
          Order no. 216371368 | Active
        </h5>
        <h5 className="UserPageOrderCardOrderSum">Order total: EUR 500</h5>
      </div>
      <div className="UserPageOrderCardMainSectionWrapper">
        <div className="UserPageOrderCardPurchasedProductWrapper">
          <div className="UserPageOrderCardPurchasedProductInfoWrapper">
            <div className="UserPageOrderCardPurchasedProductImageWrapper">
              <img
                src="https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg"
                alt="order"
                className="UserPageOrderCardPurchasedProductImage"
              />
            </div>
            <div className="UserPageOrderCardPurchasedProductInfoTextWrapper">
                <p className="UserPageOrderCardPurchasedProductTitle">Product name</p>
                <p className="UserPageOrderCardPurchasedProductQuantity">Quantity: 2</p>
            </div>
          </div>
          <p className="UserPageOrderCardPurchasedProductPrice">EUR 272.00</p>
        </div>
      </div>
    </div>
  );
};

export default UserPageOrderCard;

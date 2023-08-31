import "./ShoppingCart.css";
import Button from "../ReusableComponents/Button/Button";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { useCart } from "../../HelperFunctions/CartContext";
import {cartItemData} from "../../types/types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCartImg from "./../../Assets/empty-cart-img.png";

// const calculateInitialTotalPrice = (items: cartItemData[]) => {
//   return items.reduce((total: number, item: cartItemData) => total + item.price, 0);
// };

const calculateTotalPrice = (items: cartItemData[]) => {
  return items.reduce((total: number, item: cartItemData) => total + item.price * item.cartQuantity, 0);
};

const ShoppingCart = () => {

  const {cartState, cartDispatch} = useCart();
  console.log(cartState);

  const [cartIsEmpty, setCartIsEmpty] = useState(
    cartState.cartItems.length === 0
  );
  const navigate = useNavigate();
  // const initialTotalPrice = calculateInitialTotalPrice(cartState.cartItems)
  const [totalCartPrice, setTotalCartPrice] = useState(calculateTotalPrice(cartState.cartItems));
  console.log('calculateTotalPrice', calculateTotalPrice(cartState.cartItems));
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
    
  const handleDeleteItem = (itemIndex: number) => {
    
    cartState.cartItems.map(
      (item: cartItemData, index: number) => {
        if (index === itemIndex) {
          return {...item, cartQuantity: 0 };
        }
        return item;
      }
    );
    const updatedCartAfterDelete = cartState.cartItems.filter(
      (_, index) => index !== itemIndex
      );
      
      console.log(updatedCartAfterDelete);
    setCartIsEmpty(updatedCartAfterDelete.length === 0);
    setTotalCartPrice(calculateTotalPrice(updatedCartAfterDelete));
    cartDispatch({ type: "DELETE_FROM_CART", payload: itemIndex });
    cartDispatch({ type: "UPDATE_TOTAL", payload: totalCartPrice });
  };

  const handleQuantityChange  = (itemIndex: number, newQuantity: number) => {
    
    const updatedCartItems = cartState.cartItems.map((item: cartItemData, index:number) => {
      if (index === itemIndex) {
        console.log({ ...item, quantity: newQuantity });
        return { ...item, cartQuantity: newQuantity };
      }
      console.log(item);
      return item;
    });
    console.log(newQuantity);
    console.log(updatedCartItems);
    setTotalCartPrice(calculateTotalPrice(updatedCartItems));
    setCartIsEmpty(updatedCartItems.length === 0);
    setCartItemQuantity(newQuantity);
    cartDispatch({ type: "UPDATE_CART", payload: updatedCartItems });

  };

  const handleClearCart = () => {
    cartDispatch({ type: "CLEAR_CART"});
    setTotalCartPrice(0);
    setCartIsEmpty(true);
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  }
  
  const handleGoToCheckout = () => {
    navigate("/checkout");
  }

  return (
    <div className="ShoppingCartWrapper">
      <h2 className="ShoppingCartHeading">Your cart</h2>
      <div className="ShoppingCartBody">
        {cartIsEmpty ? 
        (<div className="EmptyShoppingCartCard">
          <p className="EmptyShoppingCartTitle">
            Your shopping cart is empty
          </p> 
          <div className="EmptyShoppingCartImg">
            <img src={EmptyCartImg} alt="empty-cart" />
          </div>
        </div>) : 
        (
          <>
            <div className="ShoppingCartContent">
              <div className="ShoppingCartItemWrapper">
                {cartState.cartItems?.map((item: cartItemData, index: number) => (
                  <ShoppingCartItem
                    key={index}
                    cartItemData={item}
                    onDelete={() => handleDeleteItem(index)} 
                    onQuantityChange={
                      (newQuantity: number) => handleQuantityChange(index, newQuantity)
                    }
                  />
                ))}
              </div>
            </div>
            <div className="ShoppingCartSummaryContainer">
              <div className="ShoppingCartSummaryContainerTitle">Total:</div>
              <div className="ShoppingCartSummaryContainerValue">
                &euro; {totalCartPrice.toFixed(2)}
              </div>
            </div>
          </>
        )}
        
        <div className="ShoppingCartButtonsContainer">
          <Button
            text="Continue Shopping" 
            onClick={handleContinueShopping}
          ></Button>
          {!cartIsEmpty && (
            <Button
              text="Clear Cart" 
              onClick={handleClearCart}
            ></Button>
          )}
          {!cartIsEmpty && (
            <Button
              text="Checkout" 
              backgroundColor="rgb(209 203 203 / 75%)"
              onClick={handleGoToCheckout}
            ></Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
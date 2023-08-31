import "./ShoppingCartItem.css";
import Button from "../ReusableComponents/Button/Button";
import DeleteIcon from "./../../Assets/delete-icon.png";
import { useEffect, useReducer, useState } from "react";
import {cartItemData} from "../../types/types";
import { useCart } from "../../HelperFunctions/CartContext";
interface CartItemQuantityInitialStateTypes {
  value: number,
}

type CartItemQuantityActionTypes = 
  { type: "INCREMENT", payload: number } | 
  { type: "DECREMENT", payload: number } ;

const reducer = (
  state: CartItemQuantityInitialStateTypes, 
  action: CartItemQuantityActionTypes
  ) => {
  switch (action.type) {
    case "DECREMENT":
      return {...state, value: Math.max(1, state.value - action.payload) };
    case "INCREMENT":
      return {...state, value: state.value + action.payload};
    default:
      return state;
  }
};

const ShoppingCartItem = (
  { cartItemData, 
    onQuantityChange, 
    onDelete}: 
  { cartItemData: cartItemData; 
    onQuantityChange:(number:number) => void; 
    onDelete: () => void;}
  ) => {
    //here use the cartQuantity value from each item to set initial value-->>>
    const { cartState, cartDispatch } = useCart();
    const [cartQuantity, setCartQuantity] = useState();

    const getCartQuantityFromItems = (items: cartItemData[]) => {
      return items.map((item) => item.cartQuantity);
    }
    
    console.log(getCartQuantityFromItems(cartState.cartItems));

    const CartItemQuantityInitialState = {
      value: 1,
    };
    //<--- 
    
    const calculateTotalPrice = (items: cartItemData[], state: number) => {
      let total = 0;
  
      for (const item of items) {
        total += item.price * state;
      }
      return total;
    };

    const [state, dispatch] = useReducer(reducer, CartItemQuantityInitialState);

    const handleDecrement = () => {
      if(state.value > 1) {
        dispatch({type: "DECREMENT", payload: 1});
        onQuantityChange(state.value - 1);
      }
    };

    const handleIncrement = () => {
      dispatch({type: "INCREMENT", payload: 1});
      onQuantityChange(state.value + 1);
    };

    

    

  return (
    <div className="ShoppingCartItem">
      <div className="ShoppingCartItemData CartItemImage">
        <img 
          src={cartItemData.image} 
          alt="cartItem-img" 
        />
      </div>
      <div className="ShoppingCartItemData CartItemDescriptionWrapper">
        <div className="ShoppingCartItemData CartItemDescription">
          <div className="CartItemDescriptionTitle">
              {cartItemData.title}
          </div> 
          <div className="CartItemDescriptionColor">
            Color: {cartItemData.color}
          </div> 
          <div className="CartItemDescriptionId">
            Item no.: {cartItemData.id}
          </div> 
        </div>
        <div className="ShoppingCartItemData CartItemPrice">
          &euro; {cartItemData.price} 
        </div>
        <div className="ShoppingCartItemData CartItemQuantity">
          <div className="CartItemQuantityChanger">
            <Button text="-" onClick={handleDecrement}/>
            <div className="CartItemQuantityValue">{state.value}</div>
            <Button text="+" onClick={handleIncrement}/>
          </div>
        </div>
        <div className="ShoppingCartItemData CartItemPriceSubtotal">
          &euro; {calculateTotalPrice([cartItemData], state.value).toFixed(2)}
        </div>
        <div className="CartItemDeleteButton">
          <Button icon={DeleteIcon} onClick={onDelete}/>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCartItem
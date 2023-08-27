import './ShoppingCartItem.css';
import Button from '../ReusableComponents/Button/Button';
// @ts-ignore
import DeleteIcon from "./../../Assets/delete-icon.png";
import { useReducer } from 'react';
import {cartItemData} from '../../types/types';

const CartItemQuantityInitialState = {
  value: 1,
};

interface CartItemQuantityInitialStateTypes {
  value: number,
}

type CartItemQuantityActionTypes = 
  { type: 'INCREMENT', payload: number } | 
  { type: 'DECREMENT', payload: number } |
  { type: 'DELETE', payload: number };

const reducer = (state: CartItemQuantityInitialStateTypes, action: CartItemQuantityActionTypes) => {
  switch (action.type) {
    case "DECREMENT":
      return {...state, value: Math.max(1, state.value - action.payload) };
    case "INCREMENT":
      return {...state, value: state.value + action.payload};
    case "DELETE":
      return {...state, value: state.value * action.payload};
    default:
      return state;
  }
};

const ShoppingCartItem = (
  {cartItemData, onQuantityChange, onDelete}: 
  {cartItemData: cartItemData; 
    onQuantityChange:(number:number) => void; 
    onDelete: () => void;}
  ) => {
  console.log(cartItemData);

    const [state, dispatch] = useReducer(reducer, CartItemQuantityInitialState);

    const handleDecrement = () => {
      dispatch({type: "DECREMENT", payload: 1});
      onQuantityChange(state.value - 1);
    };

    const handleIncrement = () => {
      dispatch({type: "INCREMENT", payload: 1});
      onQuantityChange(state.value + 1);
    };

    const handleDeleteItem = () => {
      dispatch({type: "DELETE", payload: 0});
    };

  return (
    <tr className='ShoppingCartItem'>
      <td className="ShoppingCartItemData CartItemImage">
        <img 
          src={cartItemData.image} 
          alt="cartItem-img" 
        />
      </td>
      <td className="ShoppingCartItemData CartItemDescription">
        <div className="CartItemDescriptionTitle">
          {cartItemData.title}
        </div> 
        <div className="CartItemDescriptionColor">
          Color: {cartItemData.color}
        </div> 
        <div className="CartItemDescriptionId">
          Item no.: {cartItemData.id}
        </div> 
      </td>
      <td className="ShoppingCartItemData CartItemPrice">&euro; {cartItemData.price} </td>
      <td className="ShoppingCartItemData CartItemQuantity">
        <div className="CartItemQuantityChanger">
          <Button text='-' onClick={handleDecrement}/>
          <div className='CartItemQuantityValue'>{state.value}</div>
          <Button text='+' onClick={handleIncrement}/>
        </div>
      </td>
      <td className="ShoppingCartItemData CartItemPriceSubtotal">
        &euro; {parseFloat((cartItemData.price * state.value).toFixed(2))}
      </td>
      <td>
        <Button icon={DeleteIcon} onClick={onDelete}/>
      </td>
    </tr>
  )
}

export default ShoppingCartItem
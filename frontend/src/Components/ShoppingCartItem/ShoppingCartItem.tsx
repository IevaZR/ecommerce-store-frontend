import './ShoppingCartItem.css';
import Button from '../ReusableComponents/Button/Button';
import { useReducer } from 'react';

const initialState = {
    value: 1,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "DECREMENT":
            return {...state, value: Math.max(1, state.value - action.payload) };
        case "INCREMENT":
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
};

const ShoppingCartItem = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDecrement = () => {
        dispatch({type: "DECREMENT", payload: 1});
    };

    const handleIncrement = () => {
        dispatch({type: "INCREMENT", payload: 1});
    };

  return (
    <tr className='ShoppingCartItem'>
              <td className="ShoppingCartItemData CartItemImage">
                <img 
                  src="https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg" 
                  alt="cartItem-img" 
                />
              </td>
              <td className="ShoppingCartItemData CartItemDescription">
                <div className="CartItemDescriptionTitle">
                  BERGAMO SOFA WITH ROUND LOUNGING UNIT
                </div> 
                <div className="CartItemDescriptionColor">
                  White Lazio fabric 3090
                </div> 
                <div className="CartItemDescriptionId">
                  Item no.: S01
                </div> 
              </td>
              <td className="ShoppingCartItemData CartItemPrice">&euro; 6263.65</td>
              <td className="ShoppingCartItemData CartItemQuantity">
                <div className="CartItemQuantityChanger">
                  <Button text='-' onClick={handleDecrement}/>
                  <div className='CartItemQuantityValue'>{state.value}</div>
                  <Button text='+' onClick={handleIncrement}/>
                </div>
              </td>
              <td className="ShoppingCartItemData CartItemPriceSubtotal">&euro; 6263.65</td>
            </tr>
  )
}

export default ShoppingCartItem
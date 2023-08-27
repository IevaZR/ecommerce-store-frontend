import { createContext, useContext, useReducer } from "react";
import {cartItemData} from '../types/types';

const CartContext = createContext(undefined);

const CartInitialState = {
    cartItems: [],
};
interface CartInitialStateTypes {
    cartItems: cartItemData [],
};

type CartActionTypes = 
  { type: 'ADD_TO_CART', payload: cartItemData } | 
  { type: 'DELETE_FROM_CART', payload: number } |
  { type: 'UPDATE_CART', payload: number };
  
const cartReducer = (state: CartInitialStateTypes, action: CartActionTypes) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                
            };
        case 'DELETE_FROM_CART':
            const updatedCartItems = state.cartItems.filter((_, index) => index !==action.payload);
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        case 'UPDATE_CART':
            const updatedCartQuantity = state.cartItems.filter((_, index) => index !==action.payload);
            return {
                ...state,
                cartItems: updatedCartQuantity,
            };
        default:
        return state;
    }
};

export const CartProvider = ( {children} ) => {
    const [cartState, dispatch] = useReducer(cartReducer, CartInitialState);
  
    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
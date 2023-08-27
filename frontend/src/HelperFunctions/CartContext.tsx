import { createContext, useContext, useEffect, useReducer } from "react";
import {cartItemData} from '../types/types';

const CartContext = createContext(undefined);

const CartInitialState = {
    cartItems: [],
    totalItems: 0,
    cartIsEmpty: true,
};
interface CartInitialStateTypes {
    cartItems: cartItemData [],
    totalItems: number,
    cartIsEmpty: boolean,
};

type CartActionTypes = 
  { type: 'ADD_TO_CART', payload: cartItemData } | 
  { type: 'DELETE_FROM_CART', payload: number } |
  { type: 'UPDATE_CART', payload: cartItemData[] };
  
const cartReducer = (state: CartInitialStateTypes, action: CartActionTypes) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedAddCartItems = [...state.cartItems, action.payload];
            return {
                ...state,
                cartItems: updatedAddCartItems,
                totalItems: updatedAddCartItems.length,
                cartIsEmpty: false,
            };
        case 'DELETE_FROM_CART':
            const updatedDeleteCartItems = state.cartItems.filter((_, index) => index !==action.payload);
            return {
                ...state,
                cartItems: updatedDeleteCartItems,
                totalItems: updatedDeleteCartItems.length,
                cartIsEmpty: updatedDeleteCartItems.length === 0,
            };
        case 'UPDATE_CART':
            return {
                ...state,
                cartItems: action.payload,
                totalItems: action.payload.length,
                cartIsEmpty:action.payload.length === 0,
            };
        default:
        return state;
    }
};

export const CartProvider = ( {children} ) => {
    const [cartState, dispatch] = useReducer(cartReducer, CartInitialState);

    useEffect(() => {
        dispatch({ type: 'UPDATE_CART', payload: cartState.cartItems });
    }, [cartState.cartItems]);
  
    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
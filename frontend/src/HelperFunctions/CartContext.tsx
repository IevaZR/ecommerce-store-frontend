import { createContext, useContext, useEffect, useReducer } from "react";
import {cartItemData} from '../types/types';

const CartContext = createContext(undefined);

const CartInitialState = {
    cartItems: [],
    totalItems: 0,
    cartTotal: 0,
    cartIsEmpty: true,
    addedToTheCart: false,
    cartQuantity: 0,
};
interface CartInitialStateTypes {
    cartItems: cartItemData [],
    totalItems: number,
    cartTotal: number,
    cartIsEmpty: boolean,
    addedToTheCart: boolean,
    cartQuantity: number,
};

type CartActionTypes = 
  { type: 'ADD_TO_CART', payload: cartItemData } | 
  { type: 'DELETE_FROM_CART', payload: number } |
  { type: 'UPDATE_CART', payload: cartItemData[] } |
  { type: 'UPDATE_TOTAL', payload: number } |
  { type: 'CLEAR_CART'} |
  { type: 'RESET_ADDED_TO_CART', payload: boolean} |
  { type: 'GET_DATA_FROM_LOCAL_STORAGE', payload: cartItemData[] };
  
const cartReducer = (state: CartInitialStateTypes, action: CartActionTypes) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedAddCartItems = [...state.cartItems, action.payload];
            return {
                ...state,
                cartItems: updatedAddCartItems,
                totalItems: updatedAddCartItems.length,
                cartIsEmpty: false,
                addedToTheCart: true,
            };
        case 'DELETE_FROM_CART':
            const updatedDeleteCartItems = 
                state.cartItems.filter((_, index) => index !== action.payload);
            return {
                ...state,
                cartItems: updatedDeleteCartItems,
                totalItems: updatedDeleteCartItems.length,
                cartIsEmpty: updatedDeleteCartItems.length === 0,
            };
        case 'UPDATE_CART':
            localStorage.setItem("cartItems", JSON.stringify(action.payload));
            console.log('Tis is the', action.payload )
            return {
                ...state,
                cartItems: action.payload,
                totalItems: action.payload.length,
                cartIsEmpty:action.payload.length === 0,

            };
        case 'UPDATE_TOTAL':
            return {
                ...state,
                cartTotal: action.payload,
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
                totalItems: 0,
                cartIsEmpty:true,
            };
        case 'RESET_ADDED_TO_CART':
            return {
                ...state,
                addedToTheCart: false,
            };
        case 'GET_DATA_FROM_LOCAL_STORAGE':
            return {
                ...state,
                cartItems: action.payload,
                totalItems: action.payload.length,
                cartIsEmpty: action.payload.length === 0,
            };
        default:
        return state;
    }
};

export const CartProvider = ( {children} ) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, CartInitialState);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
          cartDispatch({
            type: 'GET_DATA_FROM_LOCAL_STORAGE',
            payload: storedCartItems,
          });
        }
    }, []);

    useEffect(() => {
        cartDispatch({ type: 'UPDATE_CART', payload: cartState.cartItems });
    }, [cartState.cartItems]);
  
    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
// import { createContext, useContext, useReducer } from "react";

// const CartContext = createContext(0);

// const initialState = {
//     cartItems: [],
// }

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             // Implement logic to add items to the cart
//         return {
//             ...state,
//             cartItems: [...state.cartItems, action.payload],
//         };
//         // Add cases for other actions like removing items, updating quantities, etc.
//         default:
//         return state;
//     }
// };

// export const CartProvider = ( {children} ) => {
//     const [cartState, dispatch] = useReducer(cartReducer, initialState);
  
//     return (
//         <CartContext.Provider value={{ cartState, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     return useContext(CartContext);
// };
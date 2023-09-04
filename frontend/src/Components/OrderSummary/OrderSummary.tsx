import './OrderSummary.css';
import { Link } from "react-router-dom";
import { useCart } from '../../HelperFunctions/CartContext';
import { cartItemData } from '../../types/types';
import { useState } from 'react';

const calculateTotalPrice = (items: cartItemData[]) => {
    return items.reduce((total: number, item: cartItemData) => total + item.price * item.cartQuantity, 0);
  };

const OrderSummary = () => {
    const {cartState} = useCart();
    const [totalCartPrice, setTotalCartPrice] = useState(calculateTotalPrice(cartState.cartItems));
    
    const updateTotalItemQuantity = (items: cartItemData[]) => {
        return items.reduce((total: number, item: cartItemData) => total + item.cartQuantity, 0);
    };
    
    const updatedCartItemQuantity = updateTotalItemQuantity(cartState.cartItems);
    const totalItems = updatedCartItemQuantity;

  return (
        <div className="OrderSummary">
            <div className="OrderSummaryTitle">
                Your order summary
            </div>
            <div className="OrderSummaryBlock Quantity">
                <div className="OrderSummaryQuantity">{totalItems} {totalItems === 1 ? 'item' : 'items'}</div>
                <Link to="/cart" className="HeaderNavbarAnchor cart">
                    <div className="OrderSummaryBackToCart">
                        Show details
                    </div>
                </Link>
            </div>
            <div className="OrderSummaryBlock Subtotal">
                <div className="OrderSummarySubtotalName">Subtotal</div>
                <div className="OrderSummarySubtotal"> &euro; {totalCartPrice.toFixed(2)}</div>
            </div>
            <div className="OrderSummaryBlock ShippingCosts">
                <div className="OrderSummaryShippingName">Shipping</div>
                <div className="OrderSummaryShippingCosts"> &euro; 0.00</div>
            </div>
            <div className="OrderSummaryBlock Total">
                <div className="OrderSummaryTotalName">Total</div>
                <div className="OrderSummaryTotal"> &euro; {totalCartPrice.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default OrderSummary
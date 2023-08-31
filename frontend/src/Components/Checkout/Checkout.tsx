import { useEffect, useRef, useState } from 'react';
import CheckoutOptions from '../CheckoutOptions/CheckoutOptions';
import CheckoutShippingAddressForm from '../CheckoutShippingAddressForm/CheckoutShippingAddressForm';
import OrderSummary from '../OrderSummary/OrderSummary';
import CheckoutPersonalInfoForm from '../CheckoutPersonalInfoForm/CheckoutPersonalInfoForm';
import Button from '../ReusableComponents/Button/Button';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../HelperFunctions/CartContext';
import { cartItemData } from '../../types/types';
import axios from 'axios';
import OrderDoneModal from '../OrderDoneModal/OrderDoneModal';

const Checkout = () => {
    const [orderButtonisVisible, setOrderButtonisVisible ] = useState (true);
    const [showOrderDoneModal, setShowOrderDoneModal] = useState (false);
    const {cartState, cartDispatch} = useCart();
    const modalTimeoutRef = useRef(null);
    // const [orderContent, setOrderContent] = useState([{
    //     product: {
    //         name: cartState.cartItem.title,
    //         quantity: cartState.cartItem.cartQuantity,
    //         price: cartState.cartItem.price,
    //         image: cartState.cartItem.image,
    //     }
    // }]);

    // console.log(orderContent);

    // const [orderData, setOrderData] = useState({
    //     id: Math.floor(Math.random() * 100000),
    //     orderedProducts: orderContent,
    //     customer: [],
    // });

    useEffect(() => {
        
        
        
    }, [cartState.addedToTheCart, cartDispatch]);
    
    
    const handleMakeOrder = () => {
        setShowOrderDoneModal(true);

        // Clear any previous timeout
        if (modalTimeoutRef.current) {
            clearTimeout(modalTimeoutRef.current);
        }

        // Set a timeout to close the modal after 2 seconds
        modalTimeoutRef.current = setTimeout(() => {
            setShowOrderDoneModal(false);
            navigate('/');
            cartDispatch({type: 'CLEAR_CART'})
        }, 2000);
        
        // Cleanup function
        return () => {
            if (modalTimeoutRef.current) {
                clearTimeout(modalTimeoutRef.current);
            }
        };

        // const addOrderToDatabase = async () => {
        //     try {
        //       const submitData = await axios.post(
        //         "http://localhost:3009/order/create-order",
        //         orderData
        //       );
        //       setOrderData(orderData);
        //     //   setEmptyFields(false);
        //     } catch (err) {
        //       console.log(err);
        //     //   setEmptyFields(true);
        //     }
        // };
    }

    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/shop');
    }

    const closeModal = () => {
        setShowOrderDoneModal(false);
    }

    

  return (
    <div className='CheckoutWrapper'>
        <h2 className='CheckoutHeading'>Checkout</h2>
        <div className="CheckoutBody">
            <OrderSummary/>
            <CheckoutOptions/>
            <CheckoutPersonalInfoForm/>
            <CheckoutShippingAddressForm/>
            <div className="ShoppingCartButtonsContainer">
                <Button
                    text='Continue Shopping' 
                    onClick={handleContinueShopping}
                ></Button>
                {orderButtonisVisible && 
                    <Button
                        text='Make Order' 
                        backgroundColor='rgb(209 203 203 / 75%)'
                        onClick={handleMakeOrder}
                    ></Button>
                }
            </div>

        </div>
        {showOrderDoneModal && (
                <OrderDoneModal
                onClose={closeModal}
                ></OrderDoneModal>
            )}
    </div>
  )
}

export default Checkout
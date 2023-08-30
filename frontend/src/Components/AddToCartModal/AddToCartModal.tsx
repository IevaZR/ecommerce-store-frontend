import './AddToCartModal.css';
//@ts-ignore
import IconClose from '../../Assets/close-icon.png';
//@ts-ignore
import DoneImg from '../../Assets/check-done-img.png';
import { useCart } from '../../HelperFunctions/CartContext';



const handleModalClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    console.log('click close modal');
    // onClose(); // <--- I have to give props from parent
};



const AddToCartModal = () => {
    const {cartState} = useCart();

    const lastAddedItemIndex = cartState.cartItems.length - 1;
    const addedItem = cartState.cartItems[lastAddedItemIndex];
   
    return (
        <div className='AddToCartModalWrapper'>
            <div className="AddToCartModalBody">
                <div className="ModalCloseIcon" onClick={handleModalClose}>
                    <img
                        src={IconClose}
                        alt="icon-close"
                    />
                </div>
                <div className="AddToCartModalContent">
                    <img src={DoneImg} alt="check-mark" />
                    <div className="AddToCartModalProductName">
                        {addedItem.title}
                    </div>
                has been added to the shopping cart!

                </div>

            </div>
        </div>
    )
}

export default AddToCartModal
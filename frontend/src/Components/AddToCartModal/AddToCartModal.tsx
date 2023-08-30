import './AddToCartModal.css';
import IconClose from '../../Assets/close-icon.png';
import DoneImg from '../../Assets/check-done-img.png';
import { useCart } from '../../HelperFunctions/CartContext';
import { AddToCartModalProps } from '../../types/types';

const AddToCartModal = ({onClose}: AddToCartModalProps) => {
    const {cartState} = useCart();

    const lastAddedItemIndex = cartState.cartItems.length - 1;
    const addedItem = cartState.cartItems[lastAddedItemIndex];

    const handleModalClose = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event propagation
        console.log('click close modal');
        onClose(); 
    };
   
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
import './OrderDoneModal.css';
import IconClose from '../../Assets/close-icon.png';
import DoneImg from '../../Assets/check-done-img.png';
import { OrderDoneModalProps } from '../../types/types';

const OrderDoneModal = ({onClose}: OrderDoneModalProps) => {

    const handleModalClose = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent event propagation
        console.log('click close modal');
        onClose(); 
    };
  return (
    <div className='OrderDoneModalWrapper'>
            <div className="OrderDoneModalBody">
                <div className="ModalCloseIcon" onClick={handleModalClose}>
                    <img
                        src={IconClose}
                        alt="icon-close"
                    />
                </div>
                <div className="OrderDoneModalContent">
                    <img src={DoneImg} alt="check-mark" />
                    Your order has been made successfully!

                </div>

            </div>
        </div>
  )
}

export default OrderDoneModal
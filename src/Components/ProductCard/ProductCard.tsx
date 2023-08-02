import './ProductCard.css';
import {Furniture} from '../../types/types';
// import Button from '../ReusableComponents/Button/Button';
import ProductPreviewModal from '../ProductPreviewModal/ProductPreviewModal';
import { useState } from 'react';
interface ProductCardProps {
    productList: Furniture;
}

const ProductCard = ({productList}: ProductCardProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    return (
    
        <div className='ProductCardWrapper'>
            <div className="ProductImageContainer">
                <img
                    src={productList.image}
                    alt="product img" />
            </div>
            <div className="ProductDataContainer">
                <div className="ProductName">
                    {productList.title}
                </div>
                <div className="ProductPrice">
                    {productList.price} EUR
                </div>
            </div>
            {/* <Button text='View' /> */}
            <button 
                className='ProductCardQuickviewButton'
                onClick={openModal}
                >
                Quickview
            </button>
            {isModalOpen && (
                <ProductPreviewModal
                    onClose={closeModal}
                    productList={productList}
                />
            )}
        </div>
    );
}


export default ProductCard
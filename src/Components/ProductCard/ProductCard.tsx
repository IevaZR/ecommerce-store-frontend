import './ProductCard.css';
import {Furniture} from '../../types/types';
// import Button from '../ReusableComponents/Button/Button';

import { useState } from 'react';
import ProductPreviewModal from '../ProductPreviewModal/ProductPreviewModal';
interface ProductCardProps {
    productList: Furniture;
}

const ProductCard = ({productList}: ProductCardProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        console.log('click');
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }
   
    return (
    <>
        <div className='ProductCardWrapper'>
            <div className="ProductImageContainer">
                <img
                    src={productList.image}
                    alt="product img"
                    />
            </div>
            <div className="ProductDataContainer">
                <div className="ProductName">
                    {productList.title}
                </div>
                <div className="ProductPrice">
                &euro; {productList.price}
                </div>
            </div>
            {/* <Button text='View' /> */}
            <button 
                className='ProductCardQuickviewButton'
                onClick={openModal}
                >
                Quickview
            </button>
        </div>
        {isModalOpen && (
                <ProductPreviewModal
                    onClose={closeModal}
                    productList={productList}
                />
            )}
    </>
    );
}


export default ProductCard
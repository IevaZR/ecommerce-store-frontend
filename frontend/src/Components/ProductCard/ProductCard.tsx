import './ProductCard.css';
import Button from '../ReusableComponents/Button/Button';
import ProductPreviewModal from '../ProductPreviewModal/ProductPreviewModal';
import { useState } from 'react';
import { ProductCardProps } from "../../types/types";

const ProductCard = ({productList}: ProductCardProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
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
            <Button
                text='Quickview' 
                onClick={openModal}
            ></Button>
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
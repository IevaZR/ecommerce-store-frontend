import './ProductPreviewModal.css';
// @ts-ignore
import IconClose from '../../Assets/close-icon.png';
import {Furniture} from '../../types/types';
import { useState, useEffect } from 'react';

interface ProductPreviewModalProps {
  productList: Furniture;
  onClose: () => void;
}

const ProductPreviewModal = ({productList, onClose}: ProductPreviewModalProps) => {
   
  const [activeTab, setActiveTab] = useState('dimensions');

  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
}, [onClose]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log('click');
  };

  const handleCloseModal = (event) => {
    if (event.target.classList.contains('ProductPreviewModalWrapper')) {
        onClose();
    }
};


  return (
    <div className='ProductPreviewModalWrapper' onClick={handleCloseModal}>
      <div className="ProductPreviewModalBody" onClick={(e) => e.stopPropagation()}>
        <div className="ModalCloseIcon">
          <img 
            src={IconClose} 
            alt="icon-close" 
            onClick={onClose}
          />
        </div>
        <div className="ModalProductDataSection">
          <div className="ModalProductImageBlock">
            <img
              src={productList.image}
              alt="product img" 
            />
          </div>
          <div className="ModalProductInfoBlock">
            <div className="ModalProductTitle">
              {productList.title}
            </div>
            <div className="ModalProductColor">
              Color: {productList.color}
            </div>
            <div className="ModalProductDescription">
              {productList.description}
            </div>
            <div className="ModalProductDetails">
              <div className="ModalProductTabs">
                <div
                  className={`ModalProductTabButton ${activeTab === 'dimensions' ? 'active' : ''}`}
                  onClick={() => 
                    // console.log('Tab clicked!')
                    handleTabChange('dimensions')
                  }
                >
                  Dimensions
                </div>
                <div
                  className={`ModalProductTabButton ${activeTab === 'features' ? 'active' : ''}`}
                  onClick={() => handleTabChange('features')}
                >
                  Features
                </div>
              </div>
              <div className="ModalProductTabContent">
                {activeTab === 'dimensions' && (
                  <ul className="ModalProductDimensions">
                    <h5>Dimensions cm:</h5>
                    <li>width: 395</li>
                    <li>height: 83</li>
                    <li>depth: 255</li>
                  </ul>
                )}
                {activeTab === 'features' && (
                  <div className="ModalProductFeatures">
                    <h5>ORGANIC SHAPES</h5>
                    <p>Bergamo combines clean, minimal lines with organic shapes to create a visual statement in any space.</p>
                    <h5>REFINED STITCHING</h5>
                    <p>The unifying stitching design on the base, armrests, and backrest of Bergamo adds a graceful sense of comfort.</p>
                    <h5>INVISIBLE LEGS</h5>
                    <p>The Bergamo sofa is crafted with low, discrete legs that create a light, 'floating' look.</p>
                  </div>
                )}
              </div>
            </div>
            <div className="ModalProductPrice">
              &euro; {productList.price}
            </div>
            <button className='ModalProductButton'>
              Add to basket
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPreviewModal
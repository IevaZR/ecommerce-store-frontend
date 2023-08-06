import './ProductPreviewModal.css';
// @ts-ignore
import IconClose from '../../Assets/close-icon.png';
// @ts-ignore
import IconWidth from '../../Assets/width-icon.png';
// @ts-ignore
import IconHeight from '../../Assets/height-icon.png';
// @ts-ignore
import IconDepth from '../../Assets/depth-icon.png';
import Button from '../ReusableComponents/Button/Button';
import {Furniture} from '../../types/types';
import { useState, useEffect } from 'react';

interface ProductPreviewModalProps {
  productList: Furniture;
  onClose: () => void;
}

const ProductPreviewModal = ({productList, onClose}: ProductPreviewModalProps) => {
   
  const [activeTab, setActiveTab] = useState('dimensions');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log('Tab clicked:', tab);
  };

  const handleModalClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    console.log('click close modal');
    onClose();
  };

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


  return (
    <div className='ProductPreviewModalWrapper'>
      <div className="ProductPreviewModalBody" onClick={(e) => e.stopPropagation()}>
      <div className="ModalCloseIcon" onClick={handleModalClose}>
          <img
            src={IconClose}
            alt="icon-close"
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
            <div className="ModalProductInfoBlockHeader">
              <div className="ModalProductTitle">
                {productList.title}
              </div>
              <div className="ModalProductColor">
                Color: {productList.color}
              </div>
              <div className="ModalProductDescription">
                {productList.description}
              </div>
            </div>
            <div className="ModalProductDetails">
              <div className="ModalProductTabs">
                <div
                  className={`ModalProductTabButton ${activeTab === 'dimensions' ? 'active' : ''}`}
                  onClick={() => 
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
                    <li>
                      <img src={IconWidth} alt="icon-width" />
                      Width: {productList.dimensionsCm.width} cm
                    </li>
                    <li>
                      <img src={IconHeight} alt="icon-height" />
                      Height: {productList.dimensionsCm.height} cm
                    </li>
                    <li>
                      <img src={IconDepth} alt="icon-depth" />
                      Depth: {productList.dimensionsCm.depth} cm
                    </li>
                  </ul>
                )}
                {activeTab === 'features' && (
                  <div className="ModalProductFeatures">
                    {productList.features.map((feature, index) => (
                      <div key={index}>
                        <h5>{feature.featureTitle}</h5>
                        <p>{feature.featureParagraph}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="ModalProductInfoBlockFooter">
              <div className="ModalProductPrice">
                &euro; {productList.price}
              </div>
              <Button text='Add to basket' ></Button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPreviewModal
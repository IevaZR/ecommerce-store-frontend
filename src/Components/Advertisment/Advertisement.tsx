import React, { useEffect, useState } from 'react';
import '../Advertisment/Advertisement.css';
import Button from '../ReusableComponents/Button/Button';
import { useActiveSearchContext } from '../../HelperFunctions/ActiveSearchContext';
import { Furniture } from '../../types/types';
import { FurnitureData } from '../../data/data'; // Import the furnitureData from data.ts

const Advertisement = () => {
  const { updateActiveSearch } = useActiveSearchContext();
  const [randomProduct, setRandomProduct] = useState<Furniture | null>(null);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Pick a random FurnitureData item from the imported data
    const getRandomProduct = () => {
      const randomIndex = Math.floor(Math.random() * FurnitureData.length);
      setRandomProduct(FurnitureData[randomIndex]);
      setSlideIn(true);

      // Reset the animation after 2.5 seconds to slide the advertisement out
      setTimeout(() => {
        setSlideIn(false);
      }, 6000);
    };

    getRandomProduct(); // Set random product on initial mount

    // Set an interval to change the advertisement every 3 seconds
    const interval = setInterval(getRandomProduct, 8000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const showProducts = () => {
    updateActiveSearch(false);
  };

  return (
    randomProduct && (
      <div className={`AdvertisementSectionWrapper ${slideIn ? 'slideIn' : ''}`}>
        <div className='AdvertisementSectionImageWrapper'>
          <img src={randomProduct.image} alt='furniture' className='AdvertisementSectionImage' />
        </div>
        <div className='AdvertisementSectionHeadingWrapper'>
          <h1 className='AdvertisementSectionHeading'>Beautiful {randomProduct.category}</h1>
          <p className='AdvertisementSectionParagraph'>{randomProduct.features[1].featureParagraph}</p>
          <a href="#ProductView">
            {/* <button 
              className='AdvertisementSectionButton' 
              onClick={showProducts}>
              Shop Now
            </button> */}
            <Button
              text='Shop Now'
              onClick={showProducts}
            ></Button>
          </a>
        </div>
      </div>
    )
  );
};

export default Advertisement;
import React, { useEffect, useState } from 'react';
import '../Advertisment/Advertisement.css';
import { useActiveSearchContext } from '../../HelperFunctions/ActiveSearchContext';
import { Furniture } from '../../types/types';
import { FurnitureData } from '../../data/data'; // Import the furnitureData from data.ts

const Advertisement = () => {
  const { updateActiveSearch } = useActiveSearchContext();
  const [randomProduct, setRandomProduct] = useState<Furniture | null>(null);

  useEffect(() => {
    // Pick a random FurnitureData item from the imported data
    const randomIndex = Math.floor(Math.random() * FurnitureData.length);
    setRandomProduct(FurnitureData[randomIndex]);
  }, []);

  const showProducts = () => {
    updateActiveSearch(false);
  };

  return (
    randomProduct && (
      <div className='AdvertisementSectionWrapper'>
        <div className='AdvertisementSectionImageWrapper'>
          <img src={randomProduct.image} alt='furniture' className='AdvertisementSectionImage' />
        </div>
        <div className='AdvertisementSectionHeadingWrapper'>
          <h1 className='AdvertisementSectionHeading'>Beautiful {randomProduct.category}</h1>
          <p className='AdvertisementSectionParagraph'>{randomProduct.features[1].featureParagraph}</p>
          <a href="#ProductView">
            <button className='AdvertisementSectionButton' onClick={showProducts}>
              Shop Now
            </button>
          </a>
        </div>
      </div>
    )
  );
};

export default Advertisement;
import React from 'react'
import "./HeroSection.css"
// @ts-ignore
import HeroImage from "./../../Assets/heroImage.png"

const HeroSection = () => {
  return (
    <div className='HeroSectionWrapper'>
        <div className='HeroSectionHeadingWrapper'>
            <h1 className='HeroSectionHeading'>Comfortable furniture for your home</h1>
            <p className='HeroSectionParagraph'>Discover timeless elegance and unparalleled craftsmanship at our furniture shop. Transform your living spaces with our curated collection of exquisite furniture pieces and create your dream home today.</p>
            <a href="#ProductListWrapper"><button className='HeroSectionButton'>Shop Now</button></a>
        </div>
        <div className='HeroSectionImageWrapper'>
            <img src={HeroImage} alt='armchair' className='HeroSectionImage'/>
        </div>
    </div>
  )
}

export default HeroSection
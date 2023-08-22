import React from 'react'
// @ts-ignore
import LogoLetter from '../../Assets/logo-letter.svg'
import './AdminPageSideBar.css'
import { useAddProductVisibility } from "../../HelperFunctions/AddProductVisibilityContext";

const AdminPageSideBar = () => {
  const {toggleAddProductVisible} = useAddProductVisibility()

  const openAddProductForm = () => {
    toggleAddProductVisible(true)
  }
  return (
    <div className='AdminPageSideBarWrapper'>
      <div className='AdminPageSideBarLogoWrapper'>
        <img src={LogoLetter} alt="logo" className='AdminPageSideBarLogo'/>
      </div>
      <div className='AdminPageSideBarLinksWrapper'>
        <button className='AdminPageSideBarLink'><a>INVENTORY</a></button>
        <button className='AdminPageSideBarLinkSecondLevel' onClick={openAddProductForm}>ADD NEW PRODUCT</button>
        <button className='AdminPageSideBarLink'><a>ORDERS</a></button>
        <button className='AdminPageSideBarLinkSecondLevel'>ACTIVE ORDERS</button>
        <button className='AdminPageSideBarLinkSecondLevel'>FINISHED ORDERS</button>
      </div>
    </div>
  )
}

export default AdminPageSideBar
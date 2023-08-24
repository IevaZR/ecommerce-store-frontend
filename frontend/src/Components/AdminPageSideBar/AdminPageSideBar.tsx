import React from 'react'
// @ts-ignore
import LogoLetter from '../../Assets/logo-letter.svg'
import './AdminPageSideBar.css'
import { useAddProductVisibility } from "../../HelperFunctions/AddProductVisibilityContext";
import { useOrderFilterContext } from '../../HelperFunctions/OrderFilterContext';
import { useAdminVisibleContentContex } from '../../HelperFunctions/AdminVisibleContentContext';

const AdminPageSideBar = () => {
  const {toggleAddProductVisible} = useAddProductVisibility()
  const {setOrderFilterStatus} = useOrderFilterContext()
  const {setAdminVisibleContent} = useAdminVisibleContentContex()

  const openAddProductForm = () => {
    toggleAddProductVisible(true)
  }

  const showOrders = () => {
    setAdminVisibleContent("orders")
    setOrderFilterStatus('All')
  }

  const showInventory = () => {
    setAdminVisibleContent("inventory")
  }

  return (
    <div className='AdminPageSideBarWrapper'>
      <div className='AdminPageSideBarLogoWrapper'>
        <img src={LogoLetter} alt="logo" className='AdminPageSideBarLogo'/>
      </div>
      <div className='AdminPageSideBarLinksWrapper'>
        <button className='AdminPageSideBarLink' onClick={showInventory}>INVENTORY</button>
        <button className='AdminPageSideBarLinkSecondLevel' onClick={openAddProductForm}>ADD NEW PRODUCT</button>
        <button className='AdminPageSideBarLink' onClick={showOrders}>ORDERS</button>
        <button className='AdminPageSideBarLinkSecondLevel'onClick={() => setOrderFilterStatus('Active')}>ACTIVE ORDERS</button>
        <button className='AdminPageSideBarLinkSecondLevel' onClick={() => setOrderFilterStatus('Fulfilled')}>COMPLETED ORDERS</button>
      </div>
    </div>
  )
}

export default AdminPageSideBar
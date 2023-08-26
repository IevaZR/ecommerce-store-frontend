import React from 'react'
import "./UserPageMainSection.css"
import UserPageOrderList from '../UserPageOrderList/UserPageOrderList'

const UserPageMainSection = () => {
  return (
        <div className='UserPageMainSectionWrapper'>
            <div className='UserPageSideBar'>
                <h3 className='UserPageSideBarHeading'>MY ACCOUNT</h3>
                <button className='UserPageSideBarLink'>My Orders</button>
                <button className='UserPageSideBarLink'>Favourites</button>
                <button className='UserPageSideBarLink'>Account information</button>
            </div>
            <div className='UserPageInfoSection'>
                <UserPageOrderList/>
            </div>
        </div>
  )
}

export default UserPageMainSection
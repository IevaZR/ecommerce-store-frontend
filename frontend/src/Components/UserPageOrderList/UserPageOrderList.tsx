import React from 'react'
import "./UserPageOrderList.css"
import UserPageOrderCard from '../UserPageOrderCard/UserPageOrderCard'

const UserPageOrderList = () => {
  return (
    <div className='UserPageOrderListWrapper'>
        <h2 className='UserPageOrderListHeading'>My Orders</h2>
        <UserPageOrderCard/>
    </div>
  )
}

export default UserPageOrderList
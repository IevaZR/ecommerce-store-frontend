import React from 'react'
import './UserPage.css'
import Header from '../../Components/Header/Header'
import UserPageMainSection from '../../Components/UserPageMainSection/UserPageMainSection'

const UserPage = () => {
  return (
    <div className='UserPageWrapper'>
        <Header/>
        <UserPageMainSection/>
    </div>
  )
}

export default UserPage
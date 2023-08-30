import React from 'react'
import './UserPage.css'
import Header from '../../Components/Header/Header'
import UserPageMainSection from '../../Components/UserPageMainSection/UserPageMainSection'
import Footer from '../../Components/Footer/Footer'

const UserPage = () => {
  return (
    <div className='UserPageWrapper'>
        <Header/>
        <UserPageMainSection/>
        <Footer/>
    </div>
  )
}

export default UserPage
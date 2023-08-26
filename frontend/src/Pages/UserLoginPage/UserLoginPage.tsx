import React from 'react'
import "./UserLoginPage.css"
import UserLogin from '../../Components/UserLogin/UserLogin'
import Header from '../../Components/Header/Header'

const UserLoginPage = () => {
  return (
    <div className='UserLoginPageWrapper'>
        <Header/>
        <UserLogin/>
    </div>
  )
}

export default UserLoginPage
import React from 'react'
import "./UserRegisterPage.css"
import Header from '../../Components/Header/Header'
import UserRegister from '../../Components/UserRegister/UserRegister'

const UserRegisterPage = () => {
  return (
    <div className='UserRegisterPageWrapper'>
        <Header/>
        <UserRegister/>
    </div>
  )
}

export default UserRegisterPage
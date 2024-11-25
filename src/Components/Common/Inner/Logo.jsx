import React from 'react'
import logo from "../../../assets/profile.jpg"

const Logo = () => {
  return (
    <div className='h-20 px-3 flex items-center'>
     <img className='h-12  ' src={logo} alt="" />
    </div>
  )
}

export default Logo

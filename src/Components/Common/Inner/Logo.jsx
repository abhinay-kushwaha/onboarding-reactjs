import React from 'react'
import logo from "../../../assets/images.png"

const Logo = () => {
  return (
    <div className='h-20  flex items-center justify-center  border myshadow'>
     <img className='h-20    w-full object-cover  ' src={logo} alt="" />
    </div>
  )
}

export default Logo

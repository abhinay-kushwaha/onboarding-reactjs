import React from 'react'
import logo from "../../../assets/oneFOX.png"

const Logo = () => {
  return (
    <div className='h-20 px-3 flex justify-evenly items-center gap-1'>
      <h1 className='text-2xl font-mono font-bold text-nowrap'>FOX PILOTS</h1>
     <img className='h-12  ' src={logo} alt="" />
    </div>
  )
}

export default Logo

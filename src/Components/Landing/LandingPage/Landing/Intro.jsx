import React from 'react'
import IntroOne from './IntroOne'
import CustomerRate from './CustomerRate'
import Advantages from './Advantages'
import Services from './Services'
import PoweredBy from './PoweredBy'

const Intro = () => {
  return (
    <>
    <div className='text-wrap '>
        <div className=' '>
        <IntroOne/>
        </div>
        <div className=' '>
        <CustomerRate/>
        </div>
        <div className=' '>
        <Advantages/>
        </div>
        <div className=' '>
        <Services/>
        </div>
        <div className=' '>
        <PoweredBy/>
        </div>
  
   
 
    </div>
    </>
  )
}

export default Intro

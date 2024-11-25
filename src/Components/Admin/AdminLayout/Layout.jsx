import React from 'react'
import Sidebar from './Sidebar'
import Header from '../../Common/Inner/Header'
import Footer from '../../Landing/LandingPage/Footer'
 

const Layout = ({children}) => {
  return (
    <div className="flex   h-screen ">
    <div className="hidden md:block  md:w-[25%] lg:w-[20%]   ">
            <div className=" md:w-[25%] lg:w-[20%] fixed">
                   <Sidebar/> 
            </div>
      </div>

    <div className="md:w-[75%] lg:w-[80%]  w-full flex flex-col justify-between  ">
          <div>
             <div className="sticky  top-0 z-10">
                <Header />
                 
              </div>
              <main>{children}</main>
          </div>
      <Footer/>
    </div>
  </div>
  )
}

export default Layout

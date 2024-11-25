import React from 'react'
import { Link } from 'react-router-dom'
import FirstCompoImg from './FirstCompoImg'

const FirstCompo = () => {
  return (
    <>
   <div className=' hidden sm:block'>

   <FirstCompoImg/>
   </div>


      <div className='relative flex flex-col justify-center items-center gap-4 md:h-[400px] h-2/3 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 3xl:h-[800px] 4xl:h-[900px]  rounded-lg  '>
        <div className='triangle-bg'></div> {/* Triangle background */}
        {/* <div className='waves'></div> Waves background */}
        <h1 className='font-extrabold text-2xl md:text-4xl text-black text-center mt-5 z-10 text-wrap'>
          <span className='bg-white px-2 rounded'>Revolutionize</span> Your Lead Management
        </h1>
        <p className='font-semibold text-xl md:text-2xl text-black text-center z-10 text-wrap'>
          With the Leading Platform in the Industry
        </p>
        <p className='text-lg md:text-xl text-center mt-4 text-black z-10 text-wrap'>
          Seamlessly align your workflows with your goals and experience unparalleled efficiency with{' '}
          <strong className='shimmer-text'>Streamline</strong> as your ultimate partner.
        </p>
        <Link
          to="/signUp"
          className='bg-[#0A65AC] hover:bg-[#544541] text-white text-sm md:text-base font-medium rounded-md p-3 px-5 mt-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1 z-10 mb-6'
        >
          Get Started
        </Link>
      </div>
    </>
  )
}

export default FirstCompo

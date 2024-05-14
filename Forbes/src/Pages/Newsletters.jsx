/* eslint-disable no-unused-vars */
import React from 'react'

export default function Newsletters() {
  return (
    <>
      <div className='w-[100vw] h-[100vh] z-[30] absolute top-0 left-0'>
        <nav className='w-full bg-black  '>
           <span className="text-[15px] text-white sm:text-[35px] font-bold font-heading ">Forbes</span>
           <span className='text-[12px] text-white font-smallHeading float-end '>Create Account | Sign In</span>
        </nav>
        <div className='bg-white w-full h-full'>
          <h1 className='text-[50px] text-black font-content'>Newletters</h1>
        </div>
      </div> 
    </>
  )
}

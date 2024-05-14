/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa6";

export default function Slider({datas}) {
  return (
    <>
    <div id="Main-section" className="z-[-10] shadow-xl flex gap-3 w-full sm:w-9/12   h-[500px] mx-auto justify-center items-center" >
       <div id="data-1" className='flex flex-col justify-center items-center gap-4 object-object-fit-cover  w-8/12 mx-auto'>
           <img loading='lazy' src={datas.image} alt={datas.name} width="500px" height="500px" />
           <h1 className=' font-content text-center'>{datas.title} <br /><span className='flex justify-center'><i>Quote by</i><FaQuoteLeft className=' w-2'/> <span className='font-heading '>{datas.name}</span><FaQuoteRight className=' w-2'/></span></h1>
       </div>
      </div>
    </>
  )
}

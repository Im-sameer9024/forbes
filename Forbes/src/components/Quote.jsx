/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa6";


export default function Quote() {

  const[quote,setQuote]=useState([])

   const Url = 'https://dummyjson.com/quotes'

   const random = Math.floor(Math.random()*30)
   
   
  const fetchApi = async(Url) =>{
    const res = await fetch(Url);
    const data = await res.json()
    setQuote(data.quotes[random])
  }
 
  useEffect(()=>{
    fetchApi(Url);
  },[])

  return (
    <>
       <div className='w-9/12 my-[4rem] mx-auto border-[15px] border-orange-200 text-center '>
           <div className=' relative top-[-2rem] py-2 px-8 font-smallHeading text-[20px] bg-white inline-block '>
           QUOTE OF THE DAY
           </div>
           <div className=' flex flex-col gap-2 justify-center items-center'>
             <p className=' font-content px-3' >{quote.quote}</p>
             <span className='flex  right-0 bottom-3 font-heading '> <span className=' pb-3 font-content '><i>written by</i> &nbsp;</span> <FaQuoteLeft className=' w-2'/>The {quote.author}<FaQuoteRight className=' w-2'/></span>
           </div>
       </div>
    </>
  )
}

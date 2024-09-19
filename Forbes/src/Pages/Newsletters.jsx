/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function Newsletters() {
  return (
    <>
      <div className='w-[100vw] cursor-pointer h-[100vh] overflow-x-hidden'>
        <nav className='w-full bg-black text-center  '>
           <span className="text-[15px] text-white sm:text-[35px] font-bold font-heading">Forbes</span>
           <span className='text-[12px] text-white font-smallHeading float-end relative top-5 left-[-4rem]  '>Create Account | Sign In</span>
        </nav>
        <div className='bg-white w-11/12 mx-auto'>
          <h1 className='text-[50px] text-black font-content'>Newletters</h1>
          <p className=' mb-5 w-6/12'>The best of Forbes sent straight to your inbox with the latest insights and inspiration from experts across the globe.</p>
          <hr />
        </div>

        {/* Feature Section  */}
        <div className='w-11/12 mx-auto mt-6'>
        <h1 className=' text-[30px] font-heading mb-3'>Featured</h1>
        <div className='grid grid-cols-4 grid-rows-2 gap-4'>
          <div id='data-1' className='  border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Daily</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Get our best stories, exclusive reporting and essential analysis of the day’s news in your inbox.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-2' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Weekly</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>A weekly version of the Forbes Daily newsletter, this is a quick roundup of the week's most important stories.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-3' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>ForbesWomen</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>News and analysis about female entrepreneurs, leaders and investors.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-4' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>The Prompt</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>All things AI: The biggest news, buzziest companies and boldest breakthroughs.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-5' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CryptoCodex</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>A daily newsletter for traders, investors and the crypto-curious that will keep you ahead of the market.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-6' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Careers</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Climb the ladder with Forbes’ expert career advice.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-7' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Tax Breaks</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Get timely tax tips, need-to-know deadlines and the latest tax-related news delivered straight to your inbox.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-8' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Introduction to Digital Crypto Wallets</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Dive into the power of blockchain technology and learn how you can join the decentralized world of web3.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>
          

        </div>

        </div>

        {/* C-Suite  */}
        <div className='w-11/12 mx-auto mt-6'>
        <h1 className=' text-[30px] font-heading mb-3'>C-Suite</h1>
        <div className='grid grid-cols-4 grid-flow-row gap-4'>
          <div id='data-1' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CEO</h1>
               <span className='font-smallHeading'>SENT SUNDAYS</span>
               <p className=' font-content'>Curated for today's and tomorrow's leaders and decision makers, our expert rundown of smart business insights and the latest must-know headlines.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-2' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Future of Work</h1>
               <span className='font-smallHeading'>SENT MONDAYS</span>
               <p className=' font-content'>Top headlines, insights and ideas for CHROs, workplace leaders and talent managers about where the world of work is headed next.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-3' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CFO</h1>
               <span className='font-smallHeading'>SENT  TUESDAYS</span>
               <p className=' font-content'>Stay ahead of the curve with the most important corporate finance headlines and the latest on how local, national and global economies will impact business.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-4' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CMO</h1>
               <span className='font-smallHeading'>SENT WEDNESDAYS</span>
               <p className=' font-content'>Top insights on marketing, brand strategy and messaging to help communicators separate signal from noise.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-5' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CIO</h1>
               <span className='font-smallHeading'>SENT THURSDAYS</span>
               <p className=' font-content'>Essential trends and news in the critical area of enterprise tech and digital transformation, from AI and cybersecurity to startups and innovation.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          
          

        </div>

        </div>

        {/* From Beyond the Newsroom  */}
        <div className='w-11/12 mx-auto mt-6'>
        <h1 className=' text-[30px] font-heading mb-3'>From Beyond the Newsroom</h1>
        <div className='grid grid-cols-4 grid-flow-row gap-4'>
          <div id='data-1' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Vetted</h1>
               <span className='font-smallHeading'>SENT TUESDAYS AND THURSDAYS</span>
               <p className=' font-content'>Take the guesswork out of shopping with our expert advice and recommendations.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-2' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Vetted Deals</h1>
               <span className='font-smallHeading'>SENT FRIDAYS</span>
               <p className=' font-content'>Never miss out on a good deal with our weekly newsletter.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-3' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Vetted Travel</h1>
               <span className='font-smallHeading'>SENT WEDNESDAYS</span>
               <p className=' font-content'>Smooth travels with Vetted's weekly roundup of the best travel essentials, hotels and deals.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-4' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>LIVE Events</h1>
               <span className='font-smallHeading'>SENT ON OCCASION</span>
               <p className=' font-content'>Join us as we bring powerful stories to life, where you can super-charge your missions and connect with the world's doers.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          
          

        </div>

        </div>

        {/* More  */}
        <div className='w-11/12 mx-auto mt-6'>
        <h1 className=' text-[30px] font-heading mb-3'>More</h1>
        <div className='grid grid-cols-4 grid-flow-row gap-4'>
          <div id='data-1' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Invest Like A Pro</h1>
               <span className='font-smallHeading'>SENT INSTANTLY, TEN-DAY SERIES</span>
               <p className=' font-content'>Jump start your path to financial success and learn to grow your money like a pro in 10 days.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-2' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Personal Finance 101</h1>
               <span className='font-smallHeading'>SENT INSTANTLY, ONE-WEEK SERIES</span>
               <p className=' font-content'>Take control of your finances with tips for beginners on budgeting, investing, saving for retirement and more..</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-3' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>News Alerts</h1>
               <span className='font-smallHeading'>SENT AS NEWS HAPPENS</span>
               <p className=' font-content'>Find out about our exclusive, ground-breaking journalism as it happens.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-4' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Investing Digest</h1>
               <span className='font-smallHeading'>SENT TUESDAYS</span>
               <p className=' font-content'>All things AI: The biggest news, buzziest companies and boldest breakthroughs.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-5' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Under 30</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>A daily newsletter for traders, investors and the crypto-curious that will keep you ahead of the market.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-6' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Fresh Take</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Climb the ladder with Forbes’ expert career advice.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-7' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Current Climate</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Get timely tax tips, need-to-know deadlines and the latest tax-related news delivered straight to your inbox.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-8' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Introduction to Digital Crypto Wallets</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Dive into the power of blockchain technology and learn how you can join the decentralized world of web3.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>
             
          <div id='data-9' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Daily</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Get our best stories, exclusive reporting and essential analysis of the day’s news in your inbox.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-10' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Forbes Weekly</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>A weekly version of the Forbes Daily newsletter, this is a quick roundup of the week's most important stories.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-11' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>ForbesWomen</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>News and analysis about female entrepreneurs, leaders and investors.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-12' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>The Prompt</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>All things AI: The biggest news, buzziest companies and boldest breakthroughs.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-13' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>CryptoCodex</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>A daily newsletter for traders, investors and the crypto-curious that will keep you ahead of the market.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-14' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Careers</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Climb the ladder with Forbes’ expert career advice.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-15' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Tax Breaks</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Get timely tax tips, need-to-know deadlines and the latest tax-related news delivered straight to your inbox.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>

          <div id='data-16' className=' border flex flex-col justify-start gap-2 px-4 py-2'>
               <h1 className=' font-heading'>Introduction to Digital Crypto Wallets</h1>
               <span className='font-smallHeading'>SENT WEEKDAYS</span>
               <p className=' font-content'>Dive into the power of blockchain technology and learn how you can join the decentralized world of web3.</p>
               <div className='w-8 h-8 text-white bg-blue-600 rounded-full text-[20px] flex justify-center items-center'><FaPlus/> </div>
          </div>
          

        

       

        </div>

        </div>

        <h1 className=' mt-6 font-heading text-[30px] mx-auto w-11/12'>More on Forbes</h1>

        <div id='Footer' className=' py-8 w-11/12 mx-auto flex justify-between p-6 border'>
         <img src="https://www.shiftbase.com/hs-fs/hubfs/c187c50f-4bd8-4d3b-9edc-2b809c83fc1a.jpeg.png?width=725&name=c187c50f-4bd8-4d3b-9edc-2b809c83fc1a.jpeg.png" alt="img" className=' w-6/12' />
         <div className='w-5/12 flex flex-col gap-6'>
             <h3 className=' font-heading'>DAILY COVER</h3>
             <h1 className=' font-smallHeading text-[20px]'>This Shark Tank Winner Has A $1 Billion Plan To Replace Toilet Paper</h1>
             <p className=' font-content'>Dude Wipes’ potty mouthed founders have already grabbed 1% of the $11 billion U.S. toilet paper market. Now the Mark Cuban-backed startup is aiming to swipe up to 10%.</p>
             <button className=' w-4/12 rounded-md hover:shadow-lg bg-black text-white font-smallHeading px-4 py-2 text-[15px] '>Read Full Story</button>
         </div>
        </div>
      </div> 
    </>
  )
}

/* eslint-disable no-unused-vars */
import {FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight,} from "react-icons/fa";
import about from "../data/aboutData";
import Slider from "./Slider";
import BreakingData from '../data/aboutData'
import { useState } from "react";

export default function Info() {
  const[current,setCurrent] =useState(0)

  const[data,setData] = useState({email:"",isVisible:false})
  
  

  function submitHandler(event){
   event.preventDefault()
   console.log(data)
   
  }

  function changeHandler(event){
    const{name,type,value,checked} = event.target;
    setData((prev)=> ({...prev,[name]:type === "checkbox" ? checked : value  }) )

  }

  let previousSlider = ()=>{
      if(current === 0){
          setCurrent(about.length -1)
      }
      else{
          setCurrent(current-1)
      }
  }

  let nextSlider =()=>{
      if(current === about.length -1){
          setCurrent(0)
      }
      else{
          setCurrent(current+1)
      }
  }

  return (
    <>
      <div className=" bg-black w-11/12 mx-auto h-0.5"></div>
      <div className="w-10/12 mx-auto flex flex-col my-10  justify-center gap-3 items-center">
        <h2 className=" font-heading  text-[10px] sm:text-[14px] md:text-[20px]  ">
          Forbes Daily: Our best stories, exclusive reporting and Forbes
          perspectives on the day’s top news, plus the inside scoop on the world
          most important entrepreneurs.
        </h2>

        <form onSubmit={submitHandler} className=" flex flex-col justify-center gap-3 sm:gap-8 md:gap:10 text-[10px] sm:text-[14px] md:text-[20px] ">
          <div className=" flex gap-3">
            <input 
            type="checkbox"
             name="isVisible"
              id="isVisible"
               onChange={changeHandler} 
               checked={data.isVisible}
                 />
            <label htmlFor="hello">
              Get the latest news on special offers, product updates and content
              suggestions from Forbes and its affiliates.
            </label>
          </div>
          <div className=" flex w-full">
            <input
            onChange={changeHandler}
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              value={data.email}
              className=" w-11/12 pl-4 outline-none border border-black"
            />
            <button className=" rounded-md font-heading bg-blue-500 hover:bg-blue-600 ml-2 py-2 px-3 ">
              SignUp
            </button>
          </div>
          <span className=" font-content opacity-60">
            By signing up, you agree to our Terms of Service, and you
            acknowledge our Privacy Statement. Forbes is protected by reCAPTCHA,
            and the Google Privacy Policy and Terms of Service apply.
          </span>
        </form>
      </div>
      <div className=" bg-black w-11/12 mx-auto h-0.5 mb-5"></div>
        {/* Slider  */}
          <div className="w-10/12 flex justify-center items-center relative gap-4 mx-auto my-[3rem]">
             <span onClick={previousSlider} className=" text-[20px] opacity-45 cursor-pointer bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full hover:opacity-70 ">
              <FaRegArrowAltCircleLeft/>
             </span>
            <Slider datas={BreakingData[current]}/>
             <span onClick={nextSlider} className=" text-[20px] opacity-45 cursor-pointer bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full hover:opacity-70 " >
              <FaRegArrowAltCircleRight/>
             </span>
          </div>
    </>
  );
}

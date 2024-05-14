/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import amazon from "../assets/amazon.jpg";
import sindle2 from "../assets/sindle2.jpg";
import sindle from "../assets/single.jpeg";
import { BsStar, BsStarFill } from "react-icons/bs";
import toast from "react-hot-toast";
import Signup from "../Pages/Signup";
import { Link } from "react-router-dom";


export default function About({setShowForm,showForm,closeForm}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isStar, setIsStar] = useState(false);

  
  
  function toggleHandler() {
    if (isLiked === false) {
      toast.success("Liked");
    } else {
      toast.error("disliked");
    }
    setIsLiked(!isLiked);
  }

  function toggleHandlersecond() {
    if (isStar === false) {
      toast.success("Liked");
    } else {
      toast.error("disliked");
    }
    setIsStar(!isStar);
  }

  

  
  return (
    <>

      <div className=" bg-black w-11/12 mx-auto h-0.5"></div>
      <div className=" w-11/12 sm:w-11/12 sm:gap-2 sm:flex  sm:justify-between  mt-6 mx-auto">
        {/* Left Side  */}
        <div className=" sm:w-7/12  flex-col  ">
          <div className="box">
            <Link target="blank" to="https://www.datacenterdynamics.com/en/news/amazon-to-spend-9bn-in-singapore-on-cloud-computing-infrastructure/">
            <img
              src={amazon}
              alt="amazon"
              className="relative data-twe-lazy-animation "
              loading="lazy"
            />
            </Link>
          </div>
          {/* Text section  */}
          <div className=" flex flex-col gap-3">
            <div className=" bg-slate-600 text-white font-smallHeading px-2 mx-auto py-1 text-center z-4 relative bottom-4 w-3/5 text-[5px] sm:text-[10px]">
              SOUTHEAST ASIA TECH BOOM
            </div>
            <h1 className=" font-smallHeading text-center text-[30px] hover:underline cursor-pointer">
            <Link target="blank" to="https://www.datacenterdynamics.com/en/news/amazon-to-spend-9bn-in-singapore-on-cloud-computing-infrastructure/">
            Amazon To Double Singapore Investment To $17 Billion With Cloud
              Project
            </Link>
            </h1>
            <p className="text-center text-[10px] font-content">
              By <span className="font-bold">Jonathan Burgos</span> forbes Staff
            </p>
            <p className=" text-[20px] font-smallContent text-center">
              Amazon is doubling its investment commitment in Singapore to $17
              billion as it plans to expand its cloud computing infrastructure
              in the city-state.
            </p>
          </div>
        </div>
        {/* Right Side  */}
        <div className="   sm:w-4/12  ">
          {/* First section for text  */}
          <div className=" flex flex-col sm:flex sm:flex-col  sm:justify-start mt-5 sm:text-start text-center gap-4 ">
            <h1 className=" text-[20px] font-smallHeading">New For You</h1>
            <p className=" font-content text-[14px] leading-4">
              Sign in or Create an account for tailored recommendations based on
              your interests and preferences.
            </p>
            <button onClick={()=>closeForm()} className=" text-white  w-3/5 rounded-md font-small-heading font-bold hover:bg-blue-600 shadow-lg bg-blue-500  py-1 sm:text-[10px] md:text-[14px] text-center  mx-auto sm:mx-0 ">
              Sign in Or Register
            </button>
          </div>
          {showForm && <Signup  closeForm={closeForm}/>}
          {/* Card section  */}
          <div>
            <div className="w-full  mt-3">
              <div className="flex flex-col border-2 border-spacing-x-1 p-2 mb-2 ">
                <h3 className=" font-smallHeading text-[13px]">PREMIUM</h3>
                <div className=" flex">
                  <h1 className=" font-content line-clamp-2">
                     Billionaire Jim Simons’ Last Interview: The Hedge
                    Fund
                    <span
                      className=" relative top-5 text-[20px] text-orange-300"
                      onClick={() => toggleHandler()}
                    >
                      {isLiked ? <BsStarFill /> : <BsStar />}
                    </span>
                  </h1>
                  <img loading="lazy" src={sindle} className=" w-2/5 sm:h-[80px]  mt-10 " />
                </div>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="flex flex-col border-2 border-spacing-x-1 p-2 mb-2 ">
                <h3 className=" font-smallHeading text-[13px]">PREMIUM</h3>
                <div className=" flex">
                  <h1 className=" font-content line-clamp-2">
                    Here s Taylor Swift s Updated Eras Tour Setlist In Europe So
                    Far
                    <span
                      className=" relative top-5 text-[20px] text-orange-300"
                      onClick={() => toggleHandlersecond()}
                    >
                      {isStar ? <BsStarFill /> : <BsStar />}
                    </span>
                  </h1>
                  <img loading="lazy" src={sindle2} className="  w-2/5 sm:h-[80px] mt-10 " />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className=" flex justify-center gap-4 font-heading text-[20px] mt-5">
              <span>Popular</span> <span>Editor&rsquo;s Picks</span>
            </p>
            <div className=" flex flex-col  gap-4 text-[20px] font-smallHeading sm:text-center ">
              <h2>
                How To Watch Real Martha Baby Reindeer Interview With Piers
                Morgan
              </h2>
              <h2>
                A Ukrainian M 2 Fighting Vehicle Sneaked Up On A Russian T 80
                Tank at
              </h2>
              <h2>If Medicare Covers Cataract Surgery Why Are There Bills</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

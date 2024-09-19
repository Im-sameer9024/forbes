/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import data from "../data/data";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Navnews from "./Navnews";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import toast from "react-hot-toast";
import Signup from "../Pages/Signup";



export default function Navbar({showForm,setShowForm,closeForm}) {
  const [index, setIndex] = useState(0);
  const[xicon,setXicon] =useState(false)
  const[showSideMenu,setShowSideMenu]=useState(false)
    


  function changeIcon(){
    setXicon(!xicon)
    setShowSideMenu(!showSideMenu)
  }

  function leftHandler() {
    if (index - 1 < 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index + 1 >= data.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  


  function subscribed(){
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Emilia Gates
              </p>
              <p className="mt-1 text-sm text-gray-500">
                
                Welcome! at Forbes Family
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))
  }

  
  return (
    <>
    

      <div className="bg-black relative z-20">
        <div className="w-11/12 flex text-white mx-auto justify-between items-center  py-1 ">
          <div className="flex items-center gap-4">
          <div className=" w-6 h-6 bg-slate-400 flex  justify-center items-center bg-opacity-25">
          {
            xicon ? (<IoClose className="text-[25px]" onClick={()=>changeIcon()}/>) : (<RxHamburgerMenu className="text-[25px]"  onClick={()=>changeIcon()}/>)
          }
          </div>
            
            <Link to="/newsletter"  target="blank" className="sm:flex hover:underline items-center gap-1 font-smallHeading hidden">
              Subscribe To Newsletters
              <span className="text-[1.2rem]">
                <MdOutlineEmail />
              </span>
            </Link>
          </div>
          <span className="text-[15px] sm:text-[35px] font-bold font-heading  ">
            Forbes
          </span>
          <div className=" flex items-center gap-6">
            <button onClick={()=>subscribed()} className="bg-red-600 sm:px-4 px-1 sm:py-2  rounded-lg font-bold hover:bg-red-700 font-smallHeading">
              Subscribe
            </button>
            <button onClick={closeForm}>Sign In</button>
           {showForm && <Signup closeForm={closeForm} />}
            <FaSearch className="mt-[2px]" />
          </div>
        </div>
      </div>

      {/* burger menu bar  */}
      {
        showSideMenu && 

        <div className="bg-black w-[250px] h-[250px] z-[5] absolute scale-x-100 ease transition-all duration-400">
        <ul className="text-white font-smallHeading  text-[20px]">
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Billionaries</li></Link>
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Innovation</li></Link>
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Money</li></Link>
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Leadership</li></Link>
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Business</li></Link>
          <Link><li className="pt-2 pl-4 hover:bg-slate-800 block w-full bg-opacity-30">Lifestyle</li></Link>
        </ul>
      </div>
      }
      

      <div className="w-11/12 mx-auto mt-2 hidden md:block">
        <button className="bg-red-600 sm:px-4 px-1 sm:py-1 font-bold hover:bg-red-700 font-smallHeading text-white ">BREAKING</button>
        <div
          id="News-section"
          className="flex justify-center items-center mt-4 gap-6"
        >
          <span onClick={()=>leftHandler()} className=" text-[20px] opacity-45 cursor-pointer bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full hover:opacity-70 ">
            <FaRegArrowAltCircleLeft />
          </span>
          <Navnews BreakingNews={data[index]} />
          <span onClick={()=>rightHandler()} className=" text-[20px] opacity-45 cursor-pointer bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full hover:opacity-70  ">
            <FaRegArrowAltCircleRight />
          </span>
        </div>
      </div>
      <hr className="py-2" />
    </>
  );
}

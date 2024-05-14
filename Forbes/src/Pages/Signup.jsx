/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";



export default function Signup({closeForm}) {
 
  const [formdata, setFormdata] = useState({ email: "" });

  function changeHandler(event) {
    setFormdata(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
        toast.success("You are Registered")
        closeForm()
    console.log(formdata);
    setFormdata({ email: "" });
  }

  
  

  return (
    <>
      
        

        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-slate-500 flex justify-center items-center bg-opacity-75  z-[10]  ">
        <div className="w-[400px] h-[300px]  bg-white shadow-xl rounded-lg px-6 flex flex-col gap-4 absolute z-[20]">
        <button onClick={()=>closeForm()} className=" absolute right-[-8px] top-[-8px] text-red-500 text-[30px]"><IoCloseCircleSharp/></button>
          <p className="text-[20px] font-heading mt-6  text-black">
          Sign in or create your account
          </p>
          <form className=" flex flex-col gap-2 font-content"  onSubmit={submitForm}>
            <label htmlFor="email" className="text-black">EMAIL</label>
            <p>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeHandler}
                value={formdata.email}
                className="border border-black w-[350px] outline-none pl-1 py-1 "
              />
            </p>
            <button className=" text-white  w-full rounded-md font-small-heading font-bold hover:bg-blue-600 shadow-lg bg-blue-500  py-1   text-center  mx-auto ">Sign In Or Register</button>
          </form>
          <div className="  flex items-center justify-center gap-2 ">
            <div className="bg-black h-[1px] relative w-[40%] "></div>
            <div className=" inline-block font-smallHeading text-black">OR USE</div>
            <div className="bg-black h-[1px] relative w-[40%]"></div>
          </div>
          <div className="flex mx-auto gap-2 items-center font-smallHeading">
            <Link to="https://myaccount.google.com/" target="blank">
            <span className="text-blue-500 w-8 h-8 flex justify-center items-center bg-white border border-slate-400"><FcGoogle className="w-5 h-5"/></span>
            </Link>
            OR 
            <Link to="https://www.facebook.com/">
                <span className="text-blue-500 w-8 h-8 flex justify-center items-center bg-white border border-slate-400"><FaFacebookF className="w-5 h-5"/></span>
            </Link>
            
          </div>
        </div>
      </div>
      
    </>
  );
}

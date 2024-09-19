/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";


export default function Navnews({ BreakingNews }) {
  
  
  return (
    <>
      <div id="Main-section" className=" flex gap-3 w-11/12 mx-auto" >
       <div id="data-1">
           <p className=" font-smallContent opacity-55 text-[12px]">{BreakingNews.time1}</p>
           <Link to={BreakingNews.link1}  className=" hover:underline cursor-pointer"><h1 className=" font-heading">{BreakingNews.title1}</h1></Link>
       </div>
       <div className="w-0.5 h-[6rem] bg-gray-200 "></div>
       <div id="data-2">
           <p className=" font-smallContent opacity-55 text-[12px]">{BreakingNews.time2}</p>
           <Link to={BreakingNews.link2}  className=" hover:underline cursor-pointer"><h1 className=" font-heading">{BreakingNews.title2}</h1></Link>
       </div>
       <div className="w-0.5 h-[6rem] bg-gray-200 "></div>
       <div id="data-3" >
           <p className=" font-smallContent opacity-55 text-[12px]">{BreakingNews.time3}</p>
          <Link to={BreakingNews.link3}  className=" hover:underline cursor-pointer"><h1 className=" font-heading">{BreakingNews.title3}</h1></Link>
       </div>
       <div className="w-0.5 h-[6rem] bg-gray-200 "></div>
       <div id="data-4">
           <p className=" font-smallContent opacity-55 text-[12px]">{BreakingNews.time4}</p>
           <Link to={BreakingNews.link4}  className=" hover:underline cursor-pointer"><h1 className=" font-heading">{BreakingNews.title4}</h1></Link>
       </div>
      </div>
    </>
  );
}

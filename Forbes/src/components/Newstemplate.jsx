/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Newstemplate({ Moneydata }) {
  return (
    <>
      {/* md screen size  */}
      <div  className="md:block sm:hidden hidden ">
        <div className=" bg-black w-11/12 mx-auto h-0.5 my-6"></div>
        <div className=" relative left-14  inline-block">
          <h1 className=" mx-auto w-11/12 cursor-pointer flex items-center hover:gap-3 gap-1 font-smallHeading text-[30px] my-4  ">
            {Moneydata.title} <FaArrowRightLong className="mt-1" />
          </h1>
        </div>
        <div className=" bg-slate-300 w-11/12 mx-auto h-[0.5px]"></div>
        {/* content  */}
        <div className="w-11/12 flex h-auto mx-auto mb-10 my-[2rem]">
          {/* Left Side  */}
          <div className="w-8/12 mx-auto flex flex-col">
            <div className=" box w-11/12 h-[500px] mx-auto ">
              <img src={Moneydata.lgImage} alt="1" loading="lazy" className="w-full h-full " />
            </div>
            <h1 className="text-center mt-2">{Moneydata.lgTitle}</h1>
            <p className="text-center text-[10px] font-content">
              By <span className="font-bold">Jonathan Burgos</span> forbes Staff
            </p>
            <hr />
            {/* card section  */}
            <div className="mt-6 flex justify-between">
              {/* 1 card section  */}
              <div className=" flex flex-col gap-8">
                <div className="flex w-[330px] justify-between ">
                  <div className="box  w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage1}
                      alt="2"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle1}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>{" "}
                      forbes Staff
                    </p>
                  </div>
                </div>
                <div className="flex w-[330px] justify-between ">
                  <div className="box w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage2}
                      alt="3"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle2}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>{" "}
                      forbes Staff
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 card section  */}
              <div>
                <div className="flex w-[330px] justify-between ">
                  <div className="box w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage3}
                      alt="7"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle3}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>
                      forbes Staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side  */}

          <div className="w-4/12 flex flex-col h-[600px] justify-evenly  ">
            <div className="flex w-full h-[200px] justify-between items-center">
              <div className="box w-[160px] h-[130px] bg-slate-500">
                <img
                  src={Moneydata.mdImage1}
                  alt="5"
                  className="w-full h-full "
                  loading="lazy"
                />
              </div>
              <div className="w-[220px] flex flex-col items-center justify-center">
                <h1>{Moneydata.mdTitle1}</h1>
                <p className="text-center text-[10px] font-content">
                  By <span className="font-bold">Jonathan Burgos</span>forbes
                  Staff
                </p>
              </div>
            </div>
            <div className="flex w-full h-[200px] justify-between items-center ">
              <div className="box w-[160px] h-[130px] bg-slate-500">
                <img
                  src={Moneydata.mdImage2}
                  alt="6"
                  className="w-full h-full "
                  loading="lazy"
                />
              </div>
              <div className="w-[220px] flex flex-col items-center justify-center">
                <h1>{Moneydata.mdTitle2}</h1>
                <p className="text-center text-[10px] font-content">
                  By <span className="font-bold">Jonathan Burgos</span> forbes
                  Staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sm screen size  */}
      <div  className="sm:block block md:hidden">
        <div className=" bg-black w-11/12 mx-auto h-0.5 my-6"></div>
        <div className=" relative left-14  inline-block">
          <h1 className=" mx-auto w-11/12 cursor-pointer flex items-center hover:gap-3 gap-1 font-smallHeading text-[30px] my-4  ">
            {Moneydata.title} <FaArrowRightLong className="mt-1" />
          </h1>
        </div>
        <div className=" bg-slate-300 w-11/12 mx-auto h-[0.5px]"></div>
        {/* content  */}
        <div className="w-11/12 flex flex-col h-auto mx-auto  my-[2rem]">
        {/* Main section  */}
          <div className="w-8/12 mx-auto flex flex-col">
            <div className=" box w-11/12 h-[300px] mx-auto ">
              <img src={Moneydata.lgImage} loading="lazy" alt="1" className="w-full h-full " />
            </div>
            <h1 className="text-center mt-2">{Moneydata.lgTitle}</h1>
            <p className="text-center text-[10px] font-content">
              By <span className="font-bold">Jonathan Burgos</span> forbes Staff
            </p>
            <hr />
            {/* card section  */}
            <div className="mt-6 flex flex-col justify-center items-center">
              {/*  card section  */}
              <div className=" flex flex-col gap-8">
                <div className="flex w-[330px] justify-between ">
                  <div className="box  w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage1}
                      alt="2"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle1}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>
                      forbes Staff
                    </p>
                  </div>
                </div>
                <div className="flex w-[330px] justify-between ">
                  <div className="box w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage2}
                      alt="3"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle2}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>
                      forbes Staff
                    </p>
                  </div>
                </div>
                <div className="flex w-[330px] justify-between ">
                  <div className="box w-[100px] h-[100px] bg-slate-500">
                    <img
                      src={Moneydata.smImage3}
                      alt="7"
                      className="w-full h-full "
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[220px] flex flex-col items-center justify-center">
                    <h1>{Moneydata.smTitle3}</h1>
                    <p className="text-center text-[10px] font-content">
                      By <span className="font-bold">Jonathan Burgos</span>
                      forbes Staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

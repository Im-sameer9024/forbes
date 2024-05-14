/* eslint-disable no-unused-vars */
import React from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpeg";

export default function Footer() {
  return (
    <>
      <div className=" md:block sm:hidden hidden">
          <div className=" bg-slate-300 w-full h-auto ">
        <div className="w-11/12 mx-auto py-10">
          <div>
            <p className=" flex gap-6 justify-center items-baseline py-4 flex-wrap ">
              <span className="font-heading text-[30px]">Forbes</span>
              <span className="font-content">Billionaires</span>
              <span className="font-content">Innovation</span>
              <span className="font-content">Leadership</span>
              <span className="font-content">Money</span>
              <span className="font-content">Business</span>
              <span className="font-content">Small Business</span>
              <span className="font-content">Lifestyle</span>
              <span className="font-content">Vetted</span>
              <span className="font-content">Real Estate</span>
              <span className="font-content">Lists</span>
              <span className="font-content">Advisor</span>
              <span className="font-content">Store</span>
            </p>
          </div>
          <div className=" bg-black w-11/12 mx-auto h-0.5"></div>
          <div className="mt-6 flex gap-6 mx-auto">
            {/* List First  */}
            <div className="flex flex-col gap-6 3/12">
              <div>
                <h1 className="font-heading text-[20px]">Conferences</h1>
                <span className="font-content">ForbesLive Events</span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-heading text-[20px]">Newsletters</h1>
                <span className="font-content">Fast Forward Investing</span>
                <span className="font-content">
                  Forbes CryptoAsset & Blockchain Advisor
                </span>
                <span className="font-content">Forbes Dividend Investor</span>
                <span className="font-content">Forbes Investor</span>
                <span className="font-content">
                  Forbes Premium Income Report
                </span>
                <span className="font-content">
                  Forbes Real Estate Investor
                </span>
                <span className="font-content">Special Situation Survey</span>
                <span className="font-content">
                  Forbes/Fridson Income Securities Investor
                </span>
                <span className="font-content">Investing Newsletters</span>
                <span className="font-content">Free Editorial Newsletters</span>
              </div>
            </div>
            {/* List Second  */}
            <div className="flex flex-col gap-2 3/12">
              <div className="flex flex-col gap-2">
                <h1 className="font-heading text-[20px]">Products</h1>
                <span className="font-content">Forbes Magazine</span>
                <span className="font-content">Forbes Marketplace</span>
                <span className="font-content">Forbes Books</span>
                <span className="font-content">Forbes Books Audio</span>
                <span className="font-content">Forbes Insights</span>
                <span className="font-content">
                  Reprints, Permissions & Licensing
                </span>
                <span className="font-content">Forbes Newsfeeds</span>
                <span className="font-content">Forbes Vetted</span>
                <span className="font-content">Forbes Advisor</span>
                <span className="font-content">Forbes Global Properties</span>
                <span className="font-content">Forbes Store</span>
                <span className="font-content">Forbes Custom</span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-heading text-[20px]">Company Info</h1>
                <span className="font-content">
                  Editorial Values And Standards
                </span>
                <span className="font-content">Advertise</span>
                <span className="font-content">Forbes Careers</span>
                <span className="font-content">Forbes Press Room</span>
                <span className="font-content">Forbes Quote of the Day</span>
                <span className="font-content">Contact Us</span>
                <span className="font-content">
                  Machine Readable File: Transparency in Coverage
                </span>
                <span className="font-content">Sitemap</span>
                <span className="font-content">Send Us Feedback</span>
              </div>
            </div>
            {/* List Third  */}
            <div className="flex flex-col gap-2 3/12">
              <h1 className="font-heading text-[20px]">Forbes Councils</h1>
              <span className="font-content">Forbes Agency Council</span>
              <span className="font-content">Forbes Business Council</span>
              <span className="font-content">
                Forbes Business Development Council
              </span>
              <span className="font-content">Forbes Coaches Council</span>
              <span className="font-content">
                Forbes Communications Council
              </span>
              <span className="font-content">Forbes Finance Council</span>
              <span className="font-content">
                Forbes Human Resources Council
              </span>
              <span className="font-content">Forbes Nonprofit Council</span>
              <span className="font-content">Forbes Technology Council</span>
            </div>
            {/* Forth List  */}
            <div className="flex flex-col gap-2 5/12">
              <div className="flex gap-4 mx-auto  ">
                <img
                  src={book1}
                  alt="book1"
                  className="box w-[100px] h-[100px]"
                  loading="lazy"
                />
                <img
                  src={book2}
                  alt="book2"
                  className="box w-[100px] h-[100px]"
                  loading="lazy"
                />
                <img
                  src={book3}
                  alt="book3"
                  className="box w-[100px] h-[100px]"
                  loading="lazy"
                />
              </div>
              <h1 className=" text-red-500 text-[10px] font-content gap-2 flex justify-center">
                <span>Free Issue of Forbes</span>|
                <span>Subscriber Services</span>|<span>Gift Subscription</span>
              </h1>
              <div className=" bg-black w-11/12 mx-auto h-0.5"></div>
              <div className="flex justify-between">
                <div className="flex flex-col font-content gap-3 ">
                  <span>Forbes Africa</span>
                  <span>Forbes Afrique</span>
                  <span>Forbes America</span>
                  <span>Forbes Dubai</span>
                  <span>Forbes Brazil</span>
                  <span>Forbes China</span>
                  <span>Forbes Croatia</span>
                  <span>Forbes Austria</span>
                  <span>Forbes Japan</span>
                  <span>Forbes Poland</span>
                </div>
                <div className="flex flex-col font-content gap-3 ">
                  <span>Forbes Kazakhstan</span>
                  <span>Forbes Portugal</span>
                  <span>Forbes Korea</span>
                  <span>Forbes hailand</span>
                  <span>Forbes Lusophone</span>
                  <span>Forbes Romania</span>
                  <span>Forbes Croatia</span>
                  <span>Forbes Luxembourg</span>
                  <span>Forbes Japan</span>
                  <span>Forbes Middle East</span>
                </div>
                <div>
                  <img
                    src={book4}
                    alt="book4"
                    className="box w-[100px] h-[100px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className=" text-center font-content text-[13px] my-6  gap-2">
            &copy;<span>2024 Forbes Media LLC. All Rights Reserved</span>|
            <span>Privacy Statement</span>|
            <span>Do Not Sell or Share My Personal Information</span>|
            <span>Limit The Use of My Sensitive Personal Information</span>|
            <span>Privacy Perferences</span>|<span>Digital Terms of sale</span>|
            <span>Market Data by Morningstar</span>|<span>AdChoices</span>|
            <span>
              To report security issues email us at Security@forbes.com
            </span>
          </p>
        </div>
          </div>
      </div>

      {/* sm screen footer  */}

      <div className=" hidden sm:block md:hidden ">
         <div className=" bg-slate-300 w-full h-auto flex flex-col gap-3 py-4 mx-auto justify-center items-center  ">
        <div className=" text-center">
          <h1 className="font-heading text-[30px]">Forbes</h1>
          <p className=" font-content">&copy; 2024 Forbes Media LLC.All Rights Reserved.</p>
        </div>
        <hr />
        <div>
          <p className=" flex gap-4">
            <span>U.S Edition</span>
            <span>Asia Edition</span>
            <span>Europe Edition</span>
          </p>
        </div>
        <hr />
        <div>
          <p className=" flex gap-4">
            <span>AdChoices</span>
            <span>Privacy Statement</span>
            <span>Do Not Sell or Share My Personal Information</span>
          </p>
        </div>
        <p className=" flex gap-4">
          <span>Limits the Use of my Sensitive Personal Information</span>
          <span>Privacy Preferences</span>
          <span>Terms of Services</span>
        </p>
        <p className=" flex gap-4">
          <span>Digits Terms of Sale</span>
          <span>Contact Us</span>
          <span>Send Us Feedback</span> <span>Jobs At Forbes</span>
          <span>Reprints & Permissions</span>
        </p>
         </div>
      </div>

      {/* Phone screen footer  */}
      <div className="md:hidden sm:hidden block">
        <div className=" bg-slate-300 w-full h-auto flex flex-col justify-center items-center gap-3 py-5 ">
          <h1 className=" font-heading text-[30px]">Forbes</h1>
          <p className=" font-content">
            &copy; 2024 Forbes Media LLC.All Rights Reserved.
          </p>
          <h2 className="font-smallHeading">U.S Edition</h2>
          <h2 className="font-smallHeading">Asia Edition</h2>
          <h2 className="font-smallHeading">Europe Edition</h2>
          <h3 className="font-smallHeading">AdChoices</h3>
          <h3 className="font-smallHeading">Privacy Statement</h3>
          <h3 className="font-smallHeading">
            Do Not Sell or Share My Personal Information
          </h3>
        </div>
      </div>
    </>
  );
}

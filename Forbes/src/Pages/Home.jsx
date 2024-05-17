/* eslint-disable no-unused-vars */

import React, { lazy } from "react"        
import { useState } from "react"
import Billionars from '../data/billionars'
import LifestyleData from '../data/lifestyle'
import Moneydata from '../data/moneydata'



const About = lazy(()=> import("../components/About"))
const Footer = lazy(()=> import("../components/Footer"))
const Info = lazy(()=> import("../components/Info"))
const Navbar = lazy(()=> import("../components/Navbar"))
const Newstemplate = lazy(()=>import("../components/Newstemplate"))
const Quote = lazy(()=> import("../components/Quote"))

export default function Home() {

    const[showForm,setShowForm] = useState(false)
    const random = Math.floor(Math.random() * 6);
    
    function openForm(){
      setShowForm(!showForm)
     }
  


  return (
    <div>
      <Navbar  closeForm={openForm} showForm={showForm} setShowForm={setShowForm} />
      <About  closeForm={openForm} showForm={showForm} setShowForm={setShowForm}/>
      <Quote/>
      <Info/>
      <Newstemplate Moneydata={Moneydata[random]} />
      <Newstemplate Moneydata={LifestyleData[random]} />
      <Newstemplate Moneydata={Billionars[random]} />
      <Footer/>
    </div>
  )
}

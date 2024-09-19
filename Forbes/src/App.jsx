/* eslint-disable no-unused-vars */
import React, { lazy } from "react"     
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
const Newsletters = lazy(()=> import("./Pages/Newsletters"))


const App = () => {
  
  
  
  return (
    < >


       <Routes>
          <Route path="/newsletter" element={<Newsletters/>}/>
          <Route path="/" element={<Home/>}/>
       </Routes>
       
    </>
  )
}

export default App

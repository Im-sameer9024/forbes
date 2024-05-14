/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Infodata({dataList}) {
  console.log(dataList)
  return (
    <>
     {
      dataList.map((list)=>{
        return (
          <div key={list.id}>
            <img loading='lazy' src={list.image} alt={list.name} />
            <h1>{list.title}<span>{list.name}</span></h1>
          </div>
        )
      })
     } 
    </>
  )
}

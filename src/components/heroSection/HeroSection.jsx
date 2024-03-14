import React from 'react'
import img from "./shop2.png"
import "../../App"

function HeroSection() {
  return (
    <div className = "hero-style" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
        <img src={img}
           style={{ width: '80%', height: '80%' }} 
        />
    </div>
  )
}

export default HeroSection
import React from 'react'
import "./about.css"
import Link from 'next/link'

export default function About() {
  return (
    <div>
      
      <div className="container">
        <marquee behavior="" loop="" direction="left">नमस्ते! <tab/> <tab/> 
          <Link href="https://github.com/Rohit10503">Github</Link>   <tab/> <tab/> 
          <Link href="https://mens-aura-fullstack.vercel.app/">MensAura</Link>   <tab/> <tab/> 
          <Link href="https://lang1234.vercel.app/">Language translator</Link><tab/> <tab/> 
          <Link href="https://navbarresp.vercel.app/">Location Track</Link><tab/> <tab/> 
          


        </marquee>
        <div className="abttop">

          <div className="profile-photo">
            <img src="/rohitprofile.jpg" alt="" />
          </div>
          <div className="desc">
            
          <h2>Meet the  Developer,</h2>
            <h1><i>Rohitkumar B. Pandey</i></h1>
            <h2>Graduation Passing Year: 2025</h2>
            <h2>Namaste & Hello To everyone Reaching here..</h2>

          </div>
        </div>
        <div className="abtmid">
          <div className="acheivements"></div>
          <div className="skills"></div>
        <div className="education"></div>
        </div>
        <div className="abtbottom">
          <div className="links"></div>
        </div>
      </div>
    </div>
  )
}

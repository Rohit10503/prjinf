'use client';
import React, { useState } from 'react'
import "./navbar.css"
import Head from 'next/head';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import { Search,CircleX } from 'lucide-react';
export default function Navbar() {

  const [openNavbar,setOpenNavbar]=useState(false)
const openNav=()=>{

  // var x =document.getElementsByClassName("nav-right")[0];
  // if (x.style.display==='none' || x.style.display===''){

  //   x.style.display="block";
  //   // x.innerHTML(<CircleX />)
  // }
  // else{
  //   x.style.display="none"
    
  // }

}
  return (
    <div className='navbar-main'>
      <div className="nav-left">
        <h1>logo</h1>
      </div>
      <div className="resp-bar " onClick={openNav}>
        {
          openNavbar ? 
          <div className='nav-icon' onClick={()=>{setOpenNavbar(false)}}><CircleX/></div>
          :
          <div className='nav-icon'onClick={()=>{setOpenNavbar(true)}}><i  className="fa fa-bars" ></i> </div>
        }
      </div>
      
      <div className="nav-right" style={{ display: openNavbar ? 'block' : 'none' }}>
        <ul>
          <li>
            <div className="nav-search"><input  type='text' placeholder='Search here...' /><Search /></div>
            </li>
          <li>About</li>
          <li>Contact</li>
          <li>
          <button className='nav-btn'>Login/Signup </button>
          </li>
            </ul>
      </div>

    </div>
  )
}

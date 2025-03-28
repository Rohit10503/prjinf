'use client';
import React from 'react'
import "./navbar.css"
import Head from 'next/head';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
{/* <i className="fa fa-bars"></i> */}
export default function Navbar() {

const openNav=()=>{
  var x =document.getElementsByClassName("nav-right")[0];
  if (x.style.display==='none' || x.style.display===''){

    x.style.display="block";
  }
  else{
    x.style.display="none"
  }

}
  return (
    <div className='navbar-main'>
      <div className="nav-left">
        <h1>logo</h1>
      </div>
      <div className="resp-bar ">
        <div className='nav-icon'><i  className="fa fa-bars" onClick={openNav}></i></div>
      </div>
      <div className="nav-right">
        <ul>
          <li><input className='nav-search' type='text' placeholder='Search here...' /></li>
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

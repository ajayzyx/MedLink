import React from 'react'
import MedLinkLogo from "../assets/images/medlinklogo.png"

function Navbar() {
  return (
    <nav className ="bg-[#FFFFFF]  fixed top-0 right-0 z-40 w-full  px-6 py-4 shadow-lg lg:px-12">
        <div className="flex gap-2  items-center w-full justify-between lg:h-16">
            <div className="inline-flex gap-2 justify-center items-center">
                <div className='inline-flex  items-center size-12 justify-center'>
                    <img src={MedLinkLogo} alt ="Logo" className="size-12 " />
                </div>
                <span className=" text-xl font-bold font-oakes">Medlink</span>
            </div>
            <div className=" w-full md:flex md:max-w-[400px] lg:max-w-[500px] lg:text-xl flex-nowrap  items-center justify-between hidden  text-lg font-normal font-oakes">
                <div className='inline-flex items-center justify-center'>
                    <a href="">Home</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Feature</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="" className='text-nowrap' >About us</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Services</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Contact</a>
                    </div>
            </div>
            <div className='items-center inline-flex justify-center font-oakes'>
                <button className="py-3 text-nowrap font-medium text-white rounded-xl bg-[#0065FB] px-4  hover:bg-blue-700 ">
                    Get Started
                </button>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar

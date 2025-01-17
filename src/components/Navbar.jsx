import React from 'react'
import MedLinkLogo from "../assets/images/medlinklogo.png"

function Navbar() {
  return (
    <nav className ="bg-[#FFFFFF]  fixed top-0 right-0 z-40 w-full  px-6 py-4 shadow-lg lg:px-16">
        <div className="flex gap-2  items-center w-full justify-between lg:h-16">
            <div className="inline-flex gap-4 justify-center items-center">
                <div className='inline-flex  items-center size-12 justify-center'>
                    <img src={MedLinkLogo} alt ="Logo" className="size-12 " />
                </div>
                <span className="text-2xl font-medium font-oakes text-[#2A2A2A]">Medlink</span>
            </div>
            <div className=" w-full md:flex md:max-w-[400px] lg:max-w-[500px] flex-nowrap  items-center justify-between hidden md:text-base lg:text-lg font-normal font-oakes text-[#434344]">
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
            <div className='items-center inline-flex justify-center font-sofia text-lg'>
                <button className="lg:py-3 text-nowrap font-medium text-white rounded-xl bg-[#0065FB] lg:px-4 py-2 px-3 hover:bg-blue-700 ">
                    Get Started
                </button>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar

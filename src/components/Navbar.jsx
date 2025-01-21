import React from 'react'
import MedLinkLogo from "../assets/images/medlinklogo.png"

function Navbar() {
  return (
    <nav className ="bg-[#FFFFFF]  fixed top-0 right-0 z-40 w-full shadow-lg px-6 py-4 lg:px-16" style={{boxshadow: '0px 6px 24px 0px rgba(217, 217, 217, 0.54)'}} >
        <div className="flex gap-2  items-center w-full justify-between lg:h-16">
            <div className="inline-flex sm:gap-4 gap-2 justify-center items-center">
                <div className='inline-flex  items-center size-12 justify-center'>
                    <img src={MedLinkLogo} alt ="Logo" className="sm:size-12 size-10" />
                </div>
                <span className="lg:text-2xl lg:font-bold font-semibold sm:font-semibold sm:text-xl text-2xl font-oakes text-[#2A2A2A]">Medlink</span>
            </div>
            <div className=" w-full md:flex md:max-w-[400px] lg:max-w-[500px] flex-nowrap  items-center justify-between hidden md:text-base lg:text-lg font-normal font-oakes text-[#434344]">
                <div className='inline-flex items-center justify-center'>
                    <a href="">Home</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Features</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="" className='text-nowrap' >About Us</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Services</a>
                    </div>
                <div className='inline-flex items-center justify-center'>
                    <a href="">Contact</a>
                    </div>
            </div>
            <div className='items-center inline-flex justify-center font-sofia '>
                <button className="lg:py-3 text-nowrap font-medium text-white rounded-xl text-base sm:text-base bg-[#0065FB] lg:px-4 py-2 px-3 hover:bg-blue-700 ">
                    Get Started
                </button>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar

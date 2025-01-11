import React from 'react'
import MedLinkLogo from "../assets/images/medlinklogo.png"

function Navbar() {
  return (
    <nav className ="bg-[#FFFFFF] W-full h-[104px] px-8 py-4 shadow-lg">
        <div className="flex items-center content-center justify-between mt-3">
            <div className="flex items-center">
                <img src={MedLinkLogo} alt ="Logo" className="w-12 h-auto ml-14" />
                <span className="ml-4 text-xl font-bold">Medlink</span>
            </div>
            <div className="flex space-x-16 text-lg font-normal">
                <div>Home</div>
                <div>Features</div>
                <div>About Us</div>
                <div>Services</div>
                <div>Contact</div>
            </div>
            <div>
                <button className="py-3 font-medium text-white rounded-xl bg-[#0065FB] px-6 Oakes Grotesk hover:bg-blue-700 mr-14">
                    Get Started
                </button>
            </div>

        </div>
      
    </nav>
  )
}

export default Navbar

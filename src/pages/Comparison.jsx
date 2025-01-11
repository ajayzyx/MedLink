import React from 'react'
import Comparison1 from '../assets/images/Comparison1.png'

function Comparison() {
  return (
    <div className='h-[800px] w-full bg-[#FFFFFF]'>
       <div className="">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <h3 className="p-8 text-5xl font-semibold">
                  Why Choose Us ?
                </h3>
                <p className="w-[720px] text-[#737373] text-center">
                  Experience the difference with MedLinkPro—offering superior healthcare solutions that prioritize ease, security, and innovation for better patient care and management.
                </p>
            </div>
            <div>
              <img src={Comparison1} alt="" />
            </div>
        </div>   
    </div>
  )
}

export default Comparison

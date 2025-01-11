import React from 'react'
import Comparison from '../assets/images/Comparison.png'

function Comparison() {
  return (
    <div className=''>
       <div className="h-[800px] w-full bg-[#FFFFFF] overflow-hidden my-24">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <h3 className="p-8 text-5xl font-semibold">
                    Healthcare for a Better Tomorrow
                </h3>
                <p className="w-[720px] text-[#737373] text-center">
                At MedLinkPro, We're revolutionizing healthcare with innovative digital solutions. Our goal is to simplify access, enhance care, and empower patients and providers.
                </p>
            </div>
            <div className=''>
                <img src={Comparison} alt="" />
            </div>
        </div>   
    </div>
  )
}

export default Comparison

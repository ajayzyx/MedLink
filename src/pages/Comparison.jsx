import React from 'react'
import Comparison1 from '../assets/images/Comparison1.png'
import ComparisonImg from '../assets/images/ComparisonImg.png'
import ComparisonMobileDesign from '../assets/images/ComparisonMobileDesign.png'
import ComparisonMobileWEBP from '../assets/images/ComparisonMobileDesign.webp'

function Comparison() {
  return (
    <div className=' w-full bg-[#FFFFFF] font-oakes mt-36'>
       <div className="">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <img src={ComparisonImg} alt="" className="w-20 sm:size-fit"/>
                <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
                  Why Choose Us ?
                </h3>
                <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
                  Experience the difference with MedLinkPro—offering superior healthcare solutions that prioritize ease, security, and innovation for better patient care and management.
                </p>
            </div>
            <div className='flex justify-center mt-20'>
              <img src={Comparison1} alt="" className='w-[1440px] hidden sm:block' />
              <picture>
                <source srcset={ComparisonMobileWEBP} type="webp"/>
                <img src={ComparisonMobileDesign} alt="" className='w-[1440px] sm:hidden block' />
              </picture>
            </div>
        </div>   
    </div>
  )
}

export default Comparison

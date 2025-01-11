import React from 'react'
import AboutUs1 from '../assets/images/AboutUs1.png'
import AboutUs2 from '../assets/images/AboutUs2.png'

export default function AboutUs() {
  return (
    <div>
        <div className="h-[1300px] w-full bg-[#FFFFFF] overflow-hidden my-24">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <h3 className="p-8 text-5xl font-semibold">
                    Healthcare for a Better Tomorrow
                </h3>
                <p className="w-[720px] text-[#737373] text-center">
                At MedLinkPro, We're revolutionizing healthcare with innovative digital solutions. Our goal is to simplify access, enhance care, and empower patients and providers.
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <div className=''>
                    <img src={AboutUs1} alt="" className='w-[647px] h-[489px] p-10' />
                </div>
                <div className='w-[649px] h-[479px]'>
                    <h3 className='p-8 text-4xl font-semibold text-center mt-4'>
                        Vision
                    </h3>
                    <p className=' text-[#737373] px-32 py-16 font-normal text-3xl text-justify'>
                    <span className='text-blue-500 block text-3xl'>"</span>
                    Revolutionizing Healthcare Connectivity To create a world where healthcare is seamlessly connected with innovative digital solutions for a healthier future.
                    <span className=' text-blue-500 block text-end text-3xl'>
                        "
                    </span>
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-[649px] h-[479px]'>
                    <h3 className='p-8 text-4xl font-semibold text-center mt-4'>
                        Mission
                    </h3>
                    <p className=' text-[#737373] px-32 py-16 font-normal text-3xl text-justify'>
                    <span className='text-blue-500 block text-3xl'>
                        "
                        </span>
                        Simplify and enhance the patient journey by integrating healthcare  services digitally, reducing inefficiencies, and ensuring accessible,  accurate, and personalized care for everyone.
                    <span className=' text-blue-500 block text-end text-3xl'>
                        "
                    </span>
                    </p>
                </div>
                <div>
                    <img src={AboutUs2} alt="" className='w-[578px] h-[548px] p-10' />
                </div>
            </div>
        </div>
    </div>
  )
}

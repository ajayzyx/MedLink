import React from 'react'
import advantages1 from '../assets/images/advantages1.svg'
import advantages2 from '../assets/images/advantages2.svg'
import advantages3 from '../assets/images/advantages3.svg'
import advantages4 from '../assets/images/advantages4.svg'
import AdvantagesImage from '../assets/images/AdvantagesImage.png'
import VideoImg from '../assets/images/VideoSvg.svg'
import VideoImg2 from '../assets/images/VideoImg2.svg'
import VideoImg3 from '../assets/images/VideoImg3.svg'
import VideoImg4 from '../assets/images/VideoImg4.svg'

const Advantages = () => {
const advantages = [{
img: advantages1,
title: "AI-Driven Insights",
desc: "Empower healthcare providers to make faster, data-driven decisions that enhance patient care."
},
{
img: advantages2,
title: "Security and Privacy",
desc: "Highest standards of data protection with end-to-end encryption and compliance with healthcare regulation."
},
{
img: advantages3,
title: "Smooth Integration",
desc: "Seamlessly link with HMS, EHR, and LMS for an interconnected workflow and enhancing operational efficiency."
},
{
img: advantages4,
title: "Make Smart Decision",
desc: "Get real-time insights, reports and alerts to help you make more informed decisions."
}
];
return (
<div>
  <div className="w-full mt-28 sm:mt-32">
    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center font-oakes">
      <img src={AdvantagesImage} alt="" className="w-20 sm:size-fit" />
      <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
        Elevating Healthcare Standards
      </h3>
      <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
        Enhancing the quality, security, and efficiency of healthcare through innovative solutions that streamline
        processes and improve outcomes.
      </p>
    </div>
    {/* Adjusted flex container */}
    <div className="flex flex-wrap items-center justify-center mt-8 sm:mt-20 gap-6">
      {advantages.map(({ img, title, desc }) => (
        <div
          key={title}
          className="flex flex-col justify-center items-start sm:w-[344px] w-[260px] sm:p-6 p-3 border-[2px] rounded-xl group hover:border-blue-600 hover:bg-blue-50 hover:border-[3px]"
        >
          <div className="flex justify-center items-center size-8 sm:size-16 rounded-lg bg-[#F2F2F2] group-hover:bg-white group-hover:bg-opacity-100 bg-opacity-50 sm:mb-8 mb-4">
            <img src={img} alt={title} className="w-6 sm:size-fit"/>
          </div>
          <div>
            <h5 className="sm:text-2xl text-lg font-medium text-[#2A2A2A] sm:mb-4 mb-2">{title}</h5>
            <p className="sm:text-base text-sm font-normal text-[#737373]">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className=" w-full hidden sm:block">
      <div className="m-12 bg-[#FAFAFA] h-[720px] rounded-t-3xl relative">
      <div
      style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 30.53%, #FFF 71.38%)",
          filter: "blur(2px)"
        }}
      className="absolute w-full z-30 -bottom-4 right-0  h-40"></div>
      <div className="flex w-[1000px] justify-center z-20 items-center absolute bottom-0 left-1/2 -translate-x-1/2 " >
          <video
          autoPlay
          muted
          loop
          className="rounded-t-xl"  style={{boxShadow: "0px -12px 48px 0px rgba(217, 217, 217, 0.54);"}}>
          <source src="SampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <img src={VideoImg} alt="" className='absolute -top-16 -left-16 -z-10'/>
          <img src={VideoImg2} alt="" className='absolute right-28 -top-16'/>
          <img src={VideoImg3} alt="" className='absolute -right-40 -top-28'/>
          <img src={VideoImg4} alt="" className='absolute -right-44 bottom-52'/>
      </div>
      </div>
          </div>
      </div>
)
}

export default Advantages

import React from 'react'
import AboutUs1 from '../assets/images/AboutUs1.png'
import AboutUs2 from '../assets/images/AboutUs2.png'
import AboutUsImg from '../assets/images/AboutUsImg.png'

export default function AboutUs() {
  return (
    <div>
        <div className="w-full bg-[#FFFFFF] overflow-hidden mt-28">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center font-oakes">
                <img src={AboutUsImg} alt="" className="w-20 sm:size-fit"/>
                <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
                    Healthcare for a Better Tomorrow
                </h3>
                <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
                At MedLinkPro, We're revolutionizing healthcare with innovative digital solutions. Our goal is to simplify access, enhance care, and empower patients and providers.
                </p>
            </div>
            <div className='flex justify-center '>
            <div className='flex sm:flex-row flex-col sm:justify-between font-oakes mt-10 sm:mx-16 sm:mt-32 gap-10'>
                <div className=''>
                    <img src={AboutUs1} alt="" className='w-[280px] sm:w-[625px]' />
                </div>
                <div className='sm:w-[640px] w-[320px] font-oakes'>
                    <h3 className='sm:text-5xl text-lg font-semibold text-center'>
                        Vision
                    </h3>
                    <p className=' text-[#737373] font-normal sm:text-4xl text-sm text-justify sm:p-14 p-8'>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        </div>
                    Revolutionizing Healthcare Connectivity To create a world where healthcare is seamlessly connected with innovative digital solutions for a healthier future.
                    <div className='flex flex-row-reverse'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none" 
                    style={{ transform: "rotate(180deg)" }}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none"
                        style={{ transform: "rotate(180deg)" }}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        </div>
                    </p>
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
            <div className='flex sm:flex-row flex-col justify-between items-center font-oakes sm:mx-16 sm:mt-32 gap-6'>
                <div className='sm:w-[649px] w-[320px] font-oakes order-last sm:order-none'>
                    <h3 className='sm:text-5xl text-lg font-semibold text-center'>
                        Mission
                    </h3>
                    <p className=' text-[#737373] font-normal sm:text-4xl text-sm text-justify sm:p-14 p-8'>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        </div>
                        Simplify and enhance the patient journey by integrating healthcare  services digitally, reducing inefficiencies, and ensuring accessible,  accurate, and personalized care for everyone.
                        <div className='flex flex-row-reverse'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none" 
                    style={{ transform: "rotate(180deg)" }}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none"
                        style={{ transform: "rotate(180deg)" }}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0286865 1.86035C0.0286865 1.30807 0.476401 0.860352 1.02869 0.860352H14.0287C14.581 0.860352 15.0287 1.30807 15.0287 1.86035V15.8604C15.0287 16.4126 14.581 16.8604 14.0287 16.8604H3.8457C3.30847 16.8604 2.86251 17.2858 2.9021 17.8215C3.06484 20.0242 4.08848 22.9822 7.30416 23.3675C7.70176 23.4151 8.02869 23.734 8.02869 24.1345C8.02869 24.5349 7.70401 24.8606 7.30714 24.8072C4.89533 24.483 0.547563 22.5717 0.047286 16.869C0.0468636 16.8642 0.0428228 16.8604 0.0379944 16.8604C0.0328541 16.8604 0.0286865 16.8562 0.0286865 16.851V16.6293C-0.00874519 16.0751 -0.0104189 15.4861 0.0286865 14.8604V1.86035Z" fill="#0065FB" className='flex-row'/>
                        </svg>
                        </div>
                    </p>
                </div>
                <div>
                    <img src={AboutUs2} alt="" className='sm:w-[578px] w-[240px] mt-8 sm:mt-0' />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

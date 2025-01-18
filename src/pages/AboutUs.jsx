import React from 'react'
import AboutUs1 from '../assets/images/AboutUs1.png'
import AboutUs2 from '../assets/images/AboutUs2.png'
import AboutUsImg from '../assets/images/AboutUsImg.png'

export default function AboutUs() {
  return (
    <div>
        <div className="w-full bg-[#FFFFFF] overflow-hidden mt-28">
            <div className="bg-[#FFFFFF] m-20 flex flex-col items-center justify-center">
                <img src={AboutUsImg} alt="" />
                <h3 className="p-8 text-5xl font-semibold font-oakes">
                    Healthcare for a Better Tomorrow
                </h3>
                <p className="w-[720px] text-[#737373] text-center font-oakes">
                At MedLinkPro, We're revolutionizing healthcare with innovative digital solutions. Our goal is to simplify access, enhance care, and empower patients and providers.
                </p>
            </div>
            <div className='flex justify-between font-oakes m-16 mt-32'>
                <div className=''>
                    <img src={AboutUs1} alt="" className='w-[625px]' />
                </div>
                <div className='w-[649px] font-oakes'>
                    <h3 className='text-5xl font-semibold text-center'>
                        Vision
                    </h3>
                    <p className=' text-[#737373] font-normal text-4xl text-justify p-14'>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5287 1.7002C15.5287 1.14791 15.081 0.700195 14.5287 0.700195H1.52869C0.976402 0.700195 0.528687 1.14791 0.528687 1.7002V15.7002C0.528687 16.2525 0.976402 16.7002 1.52869 16.7002H11.7117C12.2489 16.7002 12.6949 17.1256 12.6553 17.6614C12.4925 19.864 11.4689 22.822 8.25322 23.2073C7.85562 23.2549 7.52869 23.5739 7.52869 23.9743C7.52869 24.3748 7.85336 24.7004 8.25023 24.6471C10.662 24.3229 15.0098 22.4115 15.5101 16.7089C15.5105 16.7041 15.5146 16.7002 15.5194 16.7002C15.5245 16.7002 15.5287 16.696 15.5287 16.6909V16.4691C15.5661 15.9149 15.5678 15.3259 15.5287 14.7003V1.7002Z"
                                fill="#0065FB" className='flex-row' />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5287 1.7002C15.5287 1.14791 15.081 0.700195 14.5287 0.700195H1.52869C0.976402 0.700195 0.528687 1.14791 0.528687 1.7002V15.7002C0.528687 16.2525 0.976402 16.7002 1.52869 16.7002H11.7117C12.2489 16.7002 12.6949 17.1256 12.6553 17.6614C12.4925 19.864 11.4689 22.822 8.25322 23.2073C7.85562 23.2549 7.52869 23.5739 7.52869 23.9743C7.52869 24.3748 7.85336 24.7004 8.25023 24.6471C10.662 24.3229 15.0098 22.4115 15.5101 16.7089C15.5105 16.7041 15.5146 16.7002 15.5194 16.7002C15.5245 16.7002 15.5287 16.696 15.5287 16.6909V16.4691C15.5661 15.9149 15.5678 15.3259 15.5287 14.7003V1.7002Z"
                                fill="#0065FB" className='flex-grow' />
                        </svg>
                        </div>
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center font-oakes m-16 mt-32'>
                <div className='w-[649px]'>
                    <h3 className='text-5xl font-semibold text-center'>
                        Mission
                    </h3>
                    <p className=' text-[#737373] font-normal text-4xl text-justify p-14'>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5287 1.7002C15.5287 1.14791 15.081 0.700195 14.5287 0.700195H1.52869C0.976402 0.700195 0.528687 1.14791 0.528687 1.7002V15.7002C0.528687 16.2525 0.976402 16.7002 1.52869 16.7002H11.7117C12.2489 16.7002 12.6949 17.1256 12.6553 17.6614C12.4925 19.864 11.4689 22.822 8.25322 23.2073C7.85562 23.2549 7.52869 23.5739 7.52869 23.9743C7.52869 24.3748 7.85336 24.7004 8.25023 24.6471C10.662 24.3229 15.0098 22.4115 15.5101 16.7089C15.5105 16.7041 15.5146 16.7002 15.5194 16.7002C15.5245 16.7002 15.5287 16.696 15.5287 16.6909V16.4691C15.5661 15.9149 15.5678 15.3259 15.5287 14.7003V1.7002Z"
                                fill="#0065FB" className='flex-row' />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.5287 1.7002C15.5287 1.14791 15.081 0.700195 14.5287 0.700195H1.52869C0.976402 0.700195 0.528687 1.14791 0.528687 1.7002V15.7002C0.528687 16.2525 0.976402 16.7002 1.52869 16.7002H11.7117C12.2489 16.7002 12.6949 17.1256 12.6553 17.6614C12.4925 19.864 11.4689 22.822 8.25322 23.2073C7.85562 23.2549 7.52869 23.5739 7.52869 23.9743C7.52869 24.3748 7.85336 24.7004 8.25023 24.6471C10.662 24.3229 15.0098 22.4115 15.5101 16.7089C15.5105 16.7041 15.5146 16.7002 15.5194 16.7002C15.5245 16.7002 15.5287 16.696 15.5287 16.6909V16.4691C15.5661 15.9149 15.5678 15.3259 15.5287 14.7003V1.7002Z"
                                fill="#0065FB" className='flex-row' />
                        </svg>
                        </div>
                    </p>
                </div>
                <div>
                    <img src={AboutUs2} alt="" className='w-[578px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

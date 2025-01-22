import React from 'react'
import MedLinkLogo from '../assets/images/medlinklogo.png'
import fb1 from '../assets/images/fb1.png'
import Insta1 from '../assets/images/Insta1.png'
import Mail from '../assets/images/Mail.png'
import Whatsapp from '../assets/images/Whatsapp.png'
import X from '../assets/images/X.png'
import DigifrillsLogo from '../assets/images/DigifrillsLogo.png'
import Footer1 from '../assets/images/Footer1.png'
import Foot1 from '../assets/images/Foot1.svg'
import Foot3 from '../assets/images/Foot3.svg'
import Foot4 from '../assets/images/Foot4.svg'
import Foot5 from '../assets/images/Foot5.svg'
import Foot2 from '../assets/images/Foot2.svg' 

function Footer() {
return (
<>
<div className="flex flex-col font-oakes sm:mt-36 mt-24">
    <div className='bg-white w-full sm:min-h-[540px] sm:px-12 px-4 flex sm:justify-between items-center flex-col'>
        <div className='sm:max-w-[1392px] w-full max-h-[420px] justify-center bg-[#F2F2F2] rounded-2xl flex'>
            <div className='sm:w-[700px] w-[320px] flex-row sm:p-16 sm:gap-4 order-last sm:order-none py-6 sm:py-14'>
                <h4 className='sm:text-5xl text-2xl text-[#2A2A2A] font-bold'>
                    Transform Your Health Journey with <span
                        className='sm:text-5xl text-2xl text-[#0065FB] font-bold'>MedLinkPro</span>
                </h4>
                <p className='text-[#737373] sm:text-lg font-normal my-8'>Manage your health smarter with
                    MedLinkPro—prescriptions, records, services, and recommendations, all in one place. Transforming
                    healthcare for a better future.</p>
                <button className='text-white rounded-xl bg-[#0065FB] w-full text-lg p-2'>Get Started Now</button>
            </div>
            <div className='flex-row w-[700px] h-[420px] relative hidden sm:block'>
                <img src={Footer1} alt="" className='w-[700px] absolute bottom-4 right-8' />
                <img src={Foot1} alt="" className='absolute w-16 left-4 top-16'/>
                <img src={Foot2} alt="" className='absolute w-8 right-80 bottom-8'/>
                <img src={Foot3} alt="" className='absolute w-8 top-14 left-48'/>
                <img src={Foot4} alt="" className='absolute w-28 right-32 bottom-28'/>
                <img src={Foot5} alt="" className='absolute w-8 right-12 top-40'/>
            </div>
        </div>
    </div>
    <div className='flex flex-col mt-8'>
        <div className="sm:mb-8 md:mb-0 flex pb-6 w-full items-center justify-between px-4 sm:px-12 ">
            <div>
                <h2 className="sm:text-lg text-base font-semibold">Join our newsletter</h2>
                <p className="text-gray-600 mt-1 hidden sm:block">
                    Get updates from us weekly about project management.
                </p>
            </div>
            <div className="mt-1 sm:mt-4 flex gap-1 sm:gap-8">
                <input type="email" placeholder="Enter your email"
                    className="w-[104px] sm:w-auto sm:py-2 py-1 sm:px-6 px-2f border rounded-md sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-xs sm:text-lg " />
                <div className="rounded-xl">
                    <button className="bg-blue-600 rounded-md sm:rounded-xl text-white sm:py-3 sm:px-6 py-1 px-2 sm:text-lg text-xs hover:bg-blue-700">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-200 pt-8 flex justify-between items-start mx-2 sm:mx-10'></div>
        <div className='flex mx-4 sm:mx-12'>
        <div className=' flex flex-row basis-4/6'>
          <div className="text-left flex-col flex">
            <div className="flex items-center flex-row gap-1 sm:gap-3">
                <img src={MedLinkLogo} alt="" className="size-7 sm:size-9" />
                <h3 className="font-semibold text-xl">Medlink</h3>
            </div>
            <p className="text-lg sm:text-xl font-medium text-[#2B2B2B] mt-6">
                Address:
            </p>
            <p className="text-sm sm:text-base text-[#737373] font-normal">
                block no, street name, road name, Gujarat 90783
            </p>
            <p className="text-lg sm:text-xl font-medium text-[#2B2B2B] mt-6">Contact:</p>
            <p className="text-sm sm:text-base text-[#737373] font-normal">9389218327</p>
            <p className="text-sm sm:text-base text-[#737373] font-normal">medlinkpro@gmail.com</p>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className=''>
          <div className="flex sm:gap-60 gap-4 text-left mt-10 sm:mt-0">
              <div className="text-center">
                <h3 className="font-medium sm:font-semibold text-base sm:text-lg">Sitemap</h3>
                <ul className="mt-4 sm:space-y-4 space-y-2  text-[#737373] text-sm sm:text-base">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-medium sm:font-semibold text-base sm:text-lg">Company</h3>
                <ul className="mt-4 sm:space-y-9 space-y-2 text-sm sm:text-base text-[#737373]">
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-wrap hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            </div>
        </div>
        </div>
        <div className="flex justify-between items-center mx-4 sm:mx-12 py-4">
                <div className="flex sm:gap-5 gap-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={fb1} alt="" className="w-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Insta1} alt="" className="w-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={X} alt="" className="w-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt="" className="w-5" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Mail} alt="" className="w-5" />
                    </a>
                </div>

                <div>
                    <img src={DigifrillsLogo} alt="" className="w-48 sm:w-auto" />
                </div>
            </div>
             {/* Footer Bottom */}
             <div className="sm:mt-10 border-t pt-2">
              <p className='mx-4 sm:mx-12 m-2 sm:m-4 text-[#434344] text-xs sm:text-base font-medium '>
                &copy; 2025 MedLinkPro. All Rights Reserved.
              </p>
            </div>

    </div>
</>

)
}

export default Footer

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
import Foot2 from '../assets/images/foot2.svg'
import Foot3 from '../assets/images/Foot3.svg'
import Foot4 from '../assets/images/Foot4.svg'
import Foot5 from '../assets/images/Foot5.svg' 

function Footer() {
return (
<>
<div className="flex flex-col">
    <div className='bg-white w-full min-h-[540px] px-12 flex justify-between items-center flex-col'>
        <div className='max-w-[1392px]  max-h-[420px] bg-[#F2F2F2]  rounded-2xl flex'>
            <div className='max-w-[720px] flex-row p-16 gap-4'>
                <h4 className='text-5xl text-[#2A2A2A] font-bold'>
                    Transform Your Health Journey with <span
                        className='text-5xl text-[#0065FB] font-bold'>MedLinkPro</span>
                </h4>
                <p className='text-[#737373] text-lg font-normal my-8'>Manage your health smarter with
                    MedLinkPro—prescriptions, records, services, and recommendations, all in one place. Transforming
                    healthcare for a better future.</p>
                <button className='text-white rounded-xl bg-[#0065FB] w-full text-lg p-2'>Get Started Now</button>
            </div>
            <div className='flex-row w-[700px] h-[420px] relative'>
                <img src={Footer1} alt="" className='w-[700px] absolute bottom-4 right-8' />
                <img src={Foot1} alt="" className='absolute w-16 left-4 top-16'/>
                <img src={Foot2} alt="" className='absolute w-8 right-80 bottom-8'/>
                <img src={Foot3} alt="" className='absolute w-8 top-14 left-48'/>
                <img src={Foot4} alt="" className='absolute w-28 right-32 bottom-28'/>
                <img src={Foot5} alt="" className='absolute w-8 right-12 top-40'/>
            </div>
        </div>
    </div>
    <div className='flex flex-col'>
        <div className="mb-8 md:mb-0 flex pb-6  w-full items-center justify-between px-12 ">
            <div>
                <h2 className="text-lg font-semibold">Join our newsletter</h2>
                <p className="text-gray-600 mt-1">
                    Get updates from us weekly about project management.
                </p>
            </div>
            <div className="mt-4 flex">
                <input type="email" placeholder="Enter your email"
                    className="py-2 px-6 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                <div className="ml-8 rounded-xl">
                    <button className="bg-blue-600 rounded-xl text-white py-3 px-6  hover:bg-blue-700">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-200 pt-8 flex justify-between items-start mx-10'></div>
        <div className='flex px-12'>
        <div className=' flex flex-row basis-4/6'>
          <div className="text-left flex-col flex">
            <div className="flex items-center flex-row">
                <img src={MedLinkLogo} alt="" className="size-9" />
                <h3 className="font-semibold text-2xl ml-3">Medlink</h3>
            </div>
            <p className="text-xl font-medium text-[#2B2B2B] mt-6">
                Address:
            </p>
            <p className="text-lg text-[#737373] font-normal">
                block no, street name, road name, Gujarat 90783
            </p>
            <p className="text-xl font-medium text-[#2B2B2B] mt-6">Contact:</p>
            <p className="text-lg text-[#737373] font-normal mt-3"> 9389218327</p>
            <p className="text-lg text-[#737373] font-normal m-0">medlinkpro@gmail.com</p>
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
          <div className="flex gap-48 mt-5 text-left">
              <div className="text-center">
                <h3 className="font-semibold text-lg">Sitemap</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Project
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Company</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            </div>
        </div>
        </div>
        <div className="flex justify-between items-center px-12">
                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={fb1} alt="" className="h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Insta1} alt="" className="h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={X} alt="" className="h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Whatsapp} alt="" className="h-6" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={Mail} alt="" className="h-6" />
                    </a>
                </div>

                <div>
                    <img src={DigifrillsLogo} alt="" className="h-14" />
                </div>
            </div>
             {/* Footer Bottom */}
             <div className="mt-10 border-t pt-2">
              <p className='mx-12 m-4 text-[#434344] text-base font-medium'>
                &copy; 2024 MedLinkPro. All Rights Reserved.
              </p>
            </div>

    </div>
</>

)
}

export default Footer

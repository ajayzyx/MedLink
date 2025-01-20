import React from 'react'
import features1 from '../assets/images/features1.png'
import features11 from '../assets/images/features11.png'
import features12 from '../assets/images/features12.png'
import features2 from '../assets/images/features2.png'
import features21 from '../assets/images/features21.png'
import features22 from '../assets/images/features22.png'
import features23 from '../assets/images/features23.png'
import features3 from '../assets/images/features3.png'
import features31 from '../assets/images/features31.png'
import features32 from '../assets/images/features32.png'
import features33 from '../assets/images/features33.png'
import features34 from '../assets/images/features34.png'
import features35 from '../assets/images/features35.png'
import FeaturesImg from '../assets/images/Features.png'

const Features = () => {
    return (
        <div className="w-full bg-[#FFFFFF] lg:mt-36 mt-20 ">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center font-oakes">
                <img src={FeaturesImg} alt="Features" className="w-20 sm:size-fit"/>
                <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
                    Key Features That Bridge the Gaps
                </h3>
                <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
                    Explore powerful features that close the gaps in healthcare management. Seamlessly connect patients,
                    providers, and services for a unified experience.
                </p>
            </div>
            <div  className="flex flex-col justify-center items-center sm:gap-16 gap-8 sm:p-8 ">
                {/* Feature 1 */}
                <div 
                style={{boxShadow: '0px 12px 48px 0px rgba(217, 217, 217, 0.54)'
                 }} className="bg-[#FFF8EB] rounded-xl mx-auto inline-flex ">
                    <div className="sm:my-36 sm:mx-12 lg:w-[410px] mx-4 my-6 w-[312px]">
                        <a
                            className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center sm:size-10 size-8 font-semibold font-oakes">
                            01
                        </a>
                        <h5 className="sm:text-2xl text-xl font-semibold mt-6 mb-3 text-[#000000] font-oakes">
                            Unified Appointment Scheduling
                        </h5>
                        <p className="sm:text-base text-sm font-normal text-[#737373] font-oakes">
                            Patients can book appointments effortlessly by filtering doctors based on expertise and
                            availability. Admins and staff manage schedules and send reminders, ensuring streamlined
                            consultations without conflicts.
                        </p>
                    </div>
                    <div className='hidden md:block'>
                    <div className="flex items-center justify-center w-[640px] h-[512px] relative">
                        <img src={features1} alt="" className="-bottom-0 h-[452px] absolute w-[580px] " />
                        <img src={features11} alt="" className="w-8 h-8 absolute z-0 top-16 left-20 " />
                        <img src={features12} alt="" className="bottom-24 right-12 absolute" />
                    </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div 
                style={{boxShadow: '0px 12px 48px 0px rgba(217, 217, 217, 0.54)'
                 }} 
                 className="bg-[#F8FBEE] rounded-xl mx-auto inline-flex">
                    <div className='hidden sm:block'>
                    <div className='relative w-[644px] h-[450px]'>
                        <img src={features2} alt="" className='w-[700px] -bottom-[42px] left-4 absolute'/>
                        <img src={features21} alt="" className='w-[304px] h-[316px] left-[68px] top-[36px] absolute'/>
                        <img src={features22} alt="" className='absolute w-8 right-[180px] top-10'/>
                        <img src={features23} alt="" className='absolute w-8 left-[92px] top-11'/>
                    </div>
                    </div>
                    <div className="sm:my-36 sm:mx-12 flex flex-col sm:max-w-[414px] mx-4 my-6 max-w-[312px]">
                        <a className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center sm:size-10 size-8 font-semibold font-oakes">
                            02
                        </a>
                        <h5 className="sm:text-2xl text-xl font-semibold mt-6 mb-3 text-[#000000] font-oakes">
                            Smart Prescription Management
                        </h5>
                        <p className="sm:text-base text-sm font-normal text-[#737373] font-oakes">
                            Patients can access prescriptions directly through the app, while staff monitor inventory and
                            orders. Admins oversee and ensure smooth prescription workflows for better treatment adherence.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div 
                style={{boxShadow: '0px 12px 48px 0px rgba(217, 217, 217, 0.54)'
                }}
                className="bg-[#F0EEFC] rounded-xl mx-auto inline-flex">
                    <div className="sm:my-36 sm:mx-12 sm:max-w-[412px] mx-4 my-6 max-w-[312px] flex flex-col">
                        <a className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center sm:size-10 size-8 font-semibold font-oakes">
                            03
                        </a>
                        <h5 className="sm:text-2xl text-xl font-semibold mt-6 mb-3 text-[#000000] font-oakes">
                            Pharmacy and Lab Integration
                        </h5>
                        <p className="sm:text-base text-sm font-normal text-[#737373] font-oakes">
                            Patients can order medications from hospital pharmacies and schedule lab tests with real time
                            stock availability. Staff process orders and results, while admins maintain oversight for
                            operational efficiency.
                        </p>
                    </div>
                    <div className='hidden sm:block'>
                    <div className='relative w-[640px] h-[512px]'>
                        <img src={features3} alt="" className='absolute h-[452px] w-[492px] bottom-0 left-0 '/>
                        <img src={features31} alt="" className='absolute w-[516px] right-8 top-[228px] '/>
                        <img src={features32} alt="" className='absolute w-[460px] right-6 top-[160px]'/>
                        <img src={features33} alt="" className='absolute w-[480px] right-[-38px] top-[352px]'/>
                        <img src={features34} alt="" className='absolute w-8 top-[72px] right-[100px] '/>
                        <img src={features35} alt="" className='absolute w-6 left-4 bottom-14'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

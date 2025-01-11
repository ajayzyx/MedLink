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

const Features = () => {
    return (
        <div className="w-full bg-[#FFFFFF]">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <h3 className="p-8 text-5xl font-semibold">
                    Key Features That Bridge the Gaps
                </h3>
                <p className="w-[720px] text-[#737373] text-center">
                    Explore powerful features that close the gaps in healthcare management. Seamlessly connect patients,
                    providers, and services for a unified experience.
                </p>
            </div>
            <div  className="flex flex-col gap-16 p-8 ">
                {/* Feature 1 */}
                <div style={{
                    boxShadow: '0px 12px 48px 0px rgba(217, 217, 217, 0.54)'
                }} className="bg-[#FFF8EB] rounded-xl mx-36 h-[512px] flex ">
                    <div className="my-36 mx-12 w-[392px]">
                        <a
                            className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center size-10 font-semibold">
                            01
                        </a>
                        <h5 className="text-2xl font-semibold mt-6 mb-3 text-[#2D2D2D]">
                            Unified Appointment Scheduling
                        </h5>
                        <p className="text-base font-normal text-[#737373]">
                            Patients can book appointments effortlessly by filtering doctors based on expertise and
                            availability. Admins and staff manage schedules and send reminders, ensuring streamlined
                            consultations without conflicts.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-[640px] h-[512px] relative">
                        <img src={features1} alt="" className="-bottom-0 h-[452px] absolute w-[580px]" />
                        <img src={features11} alt="" className="w-8 h-8 absolute z-0 top-16 left-16" />
                        <img src={features12} alt="" className="bottom-24 right-12 absolute" />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#F8FBEE] rounded-xl mx-36 h-[512px] flex">
                    <div className='relative w-[700px] h-[450px]'>
                        <img src={features2} alt="" className='w-[700px] h-[444px] bottom-[-61px] left-4 absolute'/>
                        <img src={features21} alt="" className='w-[304px] h-[316px] left-[68px] top-[36px] absolute'/>
                        <img src={features22} alt="" className='absolute w-8 right-[180px] top-[48px]'/>
                        <img src={features23} alt="" className='absolute w-[24px] left-[96px] top-[48px]'/>
                    </div>
                    <div className="my-36 mx-12 w-[392px]">
                        <a
                            className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center size-10 font-semibold">
                            02
                        </a>
                        <h5 className="text-2xl font-semibold mt-6 mb-3 text-[#2D2D2D]">
                            Smart Prescription Management
                        </h5>
                        <p className="text-base font-normal text-[#737373]">
                            Patients can access prescriptions directly through the app, while staff monitor inventory and
                            orders. Admins oversee and ensure smooth prescription workflows for better treatment adherence.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#F0EEFC] rounded-xl mx-36 h-[512px] flex">
                    <div className="my-36 mx-12 w-[392px]">
                        <a
                            className="bg-[#FFFFFF] rounded-md text-lg flex items-center justify-center size-10 font-semibold">
                            03
                        </a>
                        <h5 className="text-2xl font-semibold mt-6 mb-3 text-[#2D2D2D]">
                            Pharmacy and Lab Integration
                        </h5>
                        <p className="text-base font-normal text-[#737373]">
                            Patients can order medications from hospital pharmacies and schedule lab tests with real-time
                            stock availability. Staff process orders and results, while admins maintain oversight for
                            operational efficiency.
                        </p>
                    </div>
                    <div className='relative w-[640px] h-[512px]'>
                        <img src={features3} alt="" className='absolute h-[452px] w-[492px] bottom-0 left-0 '/>
                        <img src={features31} alt="" className='absolute w-[516px] right-8 top-[228px] '/>
                        <img src={features32} alt="" className='absolute w-[460px] right-6 top-[160px]'/>
                        <img src={features33} alt="" className='absolute w-[480px] right-[-38px] top-[352px]'/>
                        <img src={features34} alt="" className='absolute w-8 top-[72px] right-[120px] '/>
                        <img src={features35} alt="" className='absolute w-6 left-4 bottom-14  '/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;

import React from 'react'
import Testimonials1 from '../assets/images/Testimonials1.PNG'
import Testimonials2 from '../assets/images/Testimonials2.png'
import Testimonials3 from '../assets/images/Testimonials3.png'

function Testimonials() {
return (
<div>
    <div className="h-[800px] w-full bg-[#FFFFFF] mt-24">
        <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
            <h3 className="p-8 text-5xl font-semibold">
                What Our Users Are Saying
            </h3>
            <p className="w-[600px] text-[#737373] text-center">
                Discover how MedLinkPro is making a difference in the lives of our users through their experiences and
                feedback.
            </p>
        </div>
        <div className="flex flex-row items-center justify-center">
            <div className='w-[435px] h-[401px] rounded-lg flex flex-col justify-between m-6 p-8'>
                <div>
                    <div className='flex flex-row'>
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
                    <p className="text-[#434344] font-normal text-xl mt-8">
                        MedLinkPro ensures my time is spent where it matters the most—caring for
                        patients, not juggling admin tasks. It's all at my fingertips.
                    </p>

                    <div className="mt-6">
                        <h4 className="text-2xl font-semibold">Dr. Ajay Singh Raghuwanshi</h4>
                        <p className="text-lg text-[#2A2A2A] font-normal mt-2">Pediatrician</p>
                        <div className='relative'>
                            <img src={Testimonials2} alt="" className="w-[188px] mt-2 -left-3 absolute" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[435px] h-[401px] shadow-xl rounded-lg flex flex-col justify-between m-6 p-8'>
                <div>
                    <div className='flex flex-row'>
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
                    <p className="text-[#434344] font-normal text-xl mt-8">
                    MedLinkPro has revolutionized my daily routine. I now spend more time with patients and less time managing paperwork
                    </p>

                    <div className="mt-6">
                        <h4 className="text-2xl font-semibold">Dr. Tarang Sharma</h4>
                        <p className="text-lg text-[#2A2A2A] font-normal mt-2">Surgeon</p>
                        <div className='relative'>
                            <img src={Testimonials1} alt="" className="w-[170px] mt-2 absolute" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[435px] h-[401px] rounded-lg flex flex-col justify-between m-6 p-8'>
                <div>
                    <div className='flex flex-row'>
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
                    <p className="text-[#434344] font-normal text-xl mt-8">
                        MedLinkPro ensures my time is spent where it matters the most—caring for
                        patients, not juggling admin tasks. It's all at my fingertips.
                    </p>

                    <div className="mt-6">
                        <h4 className="text-2xl font-semibold">Dr. Kishore Patel</h4>
                        <p className="text-lg text-[#2A2A2A] font-normal mt-2">Neurologist</p>
                        <div className='relative'>
                            <img src={Testimonials3} alt="" className="w-[130px] mt-2 absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Testimonials

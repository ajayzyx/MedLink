import React from 'react'
import Testimonials1 from '../assets/images/Testimonials1.png'
import Testimonials2 from '../assets/images/Testimonials2.png'
import Testimonials3 from '../assets/images/Testimonials3.png'
import { motion } from 'framer-motion'

function Testimonials() {
const testimonials = [{
    desc : "MedLinkPro ensures my time is spent where it matters the most—caring for patients, not juggling admin tasks. It's all at my fingertips.",
    name : "Dr.Bhubnesh Maharana",
    designation : "DGHS"
},
{
    desc : "MedLinkPro ensures my time is spent where it matters the most—caring for patients, not juggling admin tasks. It's all at my fingertips.",
    name : "Dr.Bhubnesh Maharana",
    designation : "DGHS"
},
{
    desc : "MedLinkPro ensures my time is spent where it matters the most—caring for patients, not juggling admin tasks. It's all at my fingertips.",
    name : "Dr.Bhubnesh Maharana",
    designation : "DGHS"
},
]

return (
<div>
    <div className="flex flex-col w-full bg-[#FFFFFF] mt-24">
        <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
            <h3 className="p-8 text-5xl font-semibold">
                What Our Users Are Saying
            </h3>
            <p className="w-[600px] text-[#737373] text-center">
                Discover how MedLinkPro is making a difference in the lives of our users through their experiences and
                feedback.
            </p>
        </div>

        <div className="flex w-full gap-12   items-center justify-center">
        {                
            testimonials.map(({desc, name, designation}) => (
                <motion.div
                initial={{
                    scale:1,
                    boxShadow: ''}}
                transition={{
                    scale:1.05,
                    duration: 0.4}}
                whileHover={{boxShadow: "0px 10px 38px 0px rgba(217, 217, 217, 0.32)"}}
                    className='w-[435px] group inline-flex  rounded-lg  justify-between  p-6  '>
                        <div>
                            <motion.div className=" w-full h-0  group-hover:h-52 duration-300 transform-gpu ease-in-out rounded-2xl overflow-hidden">
                                
                                <img src="https://imgs.search.brave.com/vb3RKw85h1PlNSxAArl6ImeTdv5rWolfYIc3xsJxIMw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MzQ0MzU5L3Bob3Rv/L2hvc3BpdGFsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz11/UmMxU0tVZHNYZ3B6/LUg0TmRUdGx2TE9v/NV9kZnRYYWxtNGpf/Q21Jc3NJPQ" alt="" />
                            </motion.div>
                            <div className='inline-flex mt-3 flex-row'>
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
                            <p className="text-[#434344] font-normal text-xl mt-4">
                                {desc}
                            </p>        
                            <div className="mt-6 inline-flex flex-col">
                                <h4 className="text-2xl font-semibold">{name}</h4>
                                <p className="text-lg text-[#2A2A2A] font-normal mt-2">{designation}</p>
                                <div className='inline-flex items-center justify-start mt-2'>
                                    <img src={Testimonials2} alt="" className="w-[188px] " />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))                
            }
            </div>
        </div>
    </div>
    )
}
export default Testimonials

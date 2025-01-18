import React from 'react'
import advantages1 from '../assets/images/advantages1.svg'
import advantages2 from '../assets/images/advantages2.svg'
import advantages3 from '../assets/images/advantages3.svg'
import advantages4 from '../assets/images/advantages4.svg'
import AdvantagesImage from '../assets/images/AdvantagesImage.png'

const Advantages = () => {
const advantages = [{
img: advantages1,
title: "AI-Driven Insights",
desc: "Empower healthcare providers to make faster, data-driven decisions that enhance patient care."
},
{
img: advantages2,
title: "Security and Privacy",
desc: "Highest standards of data protection with end-to-end encryption and compliance with healthcare regulation"
},
{
img: advantages3,
title: "Smooth Integration",
desc: "Seamlessly link with s HMS, EHR, and LMS for an interconnected workflow and enhancing operational efficiency"
},
{
img: advantages4,
title: "Make Smart Decision",
desc: "Get real-time insights, reports and alerts to help you make more informed decisions."
}
];
return (
<div className="w-full mt-32">
    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center font-oakes">
        <img src={AdvantagesImage} alt="" />
        <h3 className="p-8 text-5xl font-semibold ">
            Elevating Healthcare Standards
        </h3>
        <p className="w-[720px] text-[#737373] text-center">
            Enhancing the quality, security, and efficiency of healthcare through innovative solutions that streamline
            processes and improve outcomes.
        </p>
    </div>
    <div className='flex items-center justify-center'>
        <div className="inline-flex justify-center items-center my-6 mx-12 font-oakes gap-4">
            {advantages.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col justify-center items-start w-[336px] p-6 border rounded-xl">
                <div className="flex justify-center items-center w-16 h-16 rounded-lg bg-[#F2F2F2] bg-opacity-50 mb-8">
                    <img src={img} alt={title} className="" />
                </div>
                <div>
                    <h5 className=" text-2xl font-medium text-[#2A2A2A] mb-4">
                        {title}
                    </h5>
                    <p className="text-base font-normal text-[#737373]">
                        {desc}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="bg-[#ffffff] w-full">
        <div className='m-10 bg-[#f1e8e8] h-[720px] rounded-t-xl'>
            <div className=''>
            </div>
        </div>
    </div>
</div>
)
}

export default Advantages

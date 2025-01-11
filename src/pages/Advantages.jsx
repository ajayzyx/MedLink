import React from 'react'
import advantages1 from '../assets/images/advantages1.svg'
import advantages2 from '../assets/images/advantages2.svg'
import advantages3 from '../assets/images/advantages3.svg'
import advantages4 from '../assets/images/advantages4.svg'

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
desc: "Seamlessly link with s HMS,  EHR, and LMS for an interconnected workflow and enhancing operational efficiency"
},
{
  img: advantages4,
  title: "Make Smart Decision",
  desc: "Get real-time insights, reports and alerts to help you make more informed decisions."
  }
];
return (
<div className="w-full my-16">
    <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
        <h3 className="p-8 text-5xl font-semibold ">
            Elevating Healthcare Standards
        </h3>
        <p className="w-[720px] text-[#737373] text-center">
            Enhancing the quality, security, and efficiency of healthcare through innovative solutions that streamline
            processes and improve outcomes.
        </p>
    </div>
    <div>
        <div className="inline-flex justify-center items-center my-6 mx-12">
            {advantages.map(({ img, title, desc }) => (
            <div key={title} className="flex flex-col justify-center items-baseline w-[326px] p-6 gap-4">
                <div className="">
                    <img src={img} alt={title} className="" />
                </div>
                <div>
                    <h5 className="">
                        {title}
                    </h5>
                    <p className="">
                        {desc}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="bg-[#ffffff] w-full">
      <div className='m-10 bg-[#fafafa] h-[720px] rounded-t-xl'>
      </div>
    </div>
</div>
)
}

export default Advantages

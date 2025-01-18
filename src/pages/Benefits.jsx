import React from 'react';
import Benefits1 from '../assets/images/Benefits1.svg';
import Benefits2 from '../assets/images/Benefits2.svg';
import Benefits3 from '../assets/images/Benefits3.svg';
import BenefitsImg from '../assets/images/Benefits.png';

const Benefits = () => {
    const benefits = [
        {
            img: Benefits1,
            title: "Smarter Healthcare Solutions",
            desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error free prescriptions, and real time patient data management."
        },
        {
            img: Benefits2,
            title: "Transforming Healthcare",
            desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error free prescriptions, and real time patient data management."
        },
        {
            img: Benefits3,
            title: "Streamlined Health Management",
            desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error free prescriptions, and real time patient data management."
        }
    ];

    return (
        <div className=" w-full bg-[#FFFFFF] overflow-hidden mt-36">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center font-oakes">
                <img src={BenefitsImg} alt="" />
                <h3 className="p-8 text-5xl font-semibold text-[#2A2A2A] tracking-wide">
                    Revolutionizing Healthcare Integration
                </h3>
                <p className="w-[720px] text-[#737373] font-light text-center text-sm">
                    MedLinkPro transforms disconnected systems into a cohesive network, streamlining care and communication
                    across the healthcare spectrum.
                </p>
            </div>
            <div>
                <div className="inline-flex justify-between items-start flex-wrap mx-12 font-oakes">
                    {benefits.map(({ img, title, desc }) => (
                        <div key={title} className="flex flex-col items-start justify-center bg-white rounded-lg m-4 p-4 w-[438px] border-[1px] border-[#E6E6E6] hover:border-hidden hover:shadow-lg">
                            <div className="flex justify-center items-center w-16 h-16 rounded-xl bg-[#F2F2F2] mb-10">
                                <img src={img} alt={title} className="size-8" />
                            </div>
                            <div className='mb-16'>
                                <h5 className="text-2xl font-semibold text-black text-start mb-4">
                                    {title}
                                </h5>
                                <p className="text-base text-gray-600 text-start ">
                                    {desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;

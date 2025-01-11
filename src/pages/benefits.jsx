import React from 'react';
import Benefits1 from '../assets/images/Benefits1.svg';
import Benefits2 from '../assets/images/Benefits2.svg';
import Benefits3 from '../assets/images/Benefits3.svg';

const Benefits = () => {
    const benefits = [
        {
            img: Benefits1,
            title: "Smarter Healthcare Solutions",
            desc: "Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management."
        },
        {
            img: Benefits2,
            title: "Transforming Healthcare",
            desc: "Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management."
        },
        {
            img: Benefits3,
            title: "Streamlined Health Management",
            desc: "Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management."
        }
    ];

    return (
        <div className="h-auto w-full bg-[#FFFFFF] overflow-hidden my-48">
            <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
                <h3 className="p-8 text-5xl font-semibold">
                    Revolutionizing Healthcare Integration
                </h3>
                <p className="w-[720px] text-[#737373] text-center">
                    MedLinkPro transforms disconnected systems into a cohesive network, streamlining care and communication
                    across the healthcare spectrum.
                </p>
            </div>
            <div>
                <div className="flex justify-between items-start flex-wrap mx-12">
                    {benefits.map(({ img, title, desc }) => (
                        <div key={title} className="flex flex-col items-start justify-center bg-white shadow-lg rounded-lg m-6 p-4 w-[424px] border">
                            <div className="flex justify-center items-center w-16 h-16 rounded-xl bg-[#F2F2F2] mb-10 mt-4">
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

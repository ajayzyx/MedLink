import React from "react";
import Benefits1 from "../assets/images/Benefits1.svg";
import Benefits2 from "../assets/images/Benefits2.svg";
import Benefits3 from "../assets/images/Benefits3.svg";
import BenefitsImg from "../assets/images/Benefits.png";
import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    {
      img: Benefits1,
      title: "Smarter Healthcare Solutions",
      desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.",
    },
    {
      img: Benefits2,
      title: "Transforming Healthcare",
      desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.",
    },
    {
      img: Benefits3,
      title: "Streamlined Health Management",
      desc: "Simplify hospital workflows with HMS integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.",
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden lg:mt-36 sm:mt-20 mt-12">
      <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center font-oakes">
        <img src={BenefitsImg} alt="Benefits" className="w-20" />
        <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
          Revolutionizing Healthcare Integration
        </h3>
        <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
          MedLinkPro transforms disconnected systems into a cohesive network,
          streamlining care and communication across the healthcare spectrum.
        </p>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-5 lg:gap-2 mt-8">
          {benefits.map(({ img, title, desc }) => (
            <motion.div
              key={title}
              className="flex flex-col items-start justify-center bg-white rounded-lg m-4 sm:m-0 lg:m-4  p-4 w-[320px] sm:w-[296px] lg:w-[320px] border-[2px] border-[#E6E6E6] sm:hover:border-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                stiffness: 100,
              }}
              style={{boxShadow: '0px 10px 48.2px 0px rgba(217, 217, 217, 0.22)'}}
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-xl bg-[#F2F2F2] mb-4 lg:mb-10">
                <img src={img} alt={title} className="size-8" />
              </div>
              <div className="mb-4 lg:mb-16">
                <h5 className="lg:text-2xl text-lg font-semibold text-black text-start mb-2 lg:mb-4 font-oakes">
                  {title}
                </h5>
                <p className="lg:text-base text-sm text-gray-600 text-start font-oakes">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

import React,{useState} from 'react'
import { motion } from 'framer-motion';
import QuestionsImg from '../assets/images/QuestionsImg.png'
export const Questions = () => {
const [activeQuestion, setActiveQuestion] = useState(null);

const questions = [
{
id: 1,
question: "What is MedLinkPro?",
answer: "MedLinkPro is a platform that simplifies patient management and reduces administrative tasks for healthcare professionals.",
},
{
id: 2,
question: "How does it improve the patient experience?",
answer: "Enables patients to communicate directly with healthcare providers for quick clarifications. Ensures patient data is kept private and secure.",
},
{
id: 3,
question: "How do digital prescriptions work?",
answer: "Digital prescriptions not only make the process more efficient but also enhance patient safety by reducing medication errors and ensuring better documentation.",
},
{
id: 4,
question: "Can you use MedLinkPro while traveling?",
answer: "Yes, MedLinkPro is designed to be accessible anytime, anywhere, making it highly convenient for use while traveling.",
},
{
id: 5,
question: "Who is MedLinkPro for?",
answer: "MedLinkPro is a versatile solution tailored for healthcare providers, patients, and administrators, making healthcare more efficient.",
},
{
id: 6,
question: "How can you start using MedLinkPro?",
answer: "Whether you're a healthcare provider or a patient, starting with MedLinkPro takes just a few simple steps.",
},
];

const toggleAnswer = (id) => {
setActiveQuestion(activeQuestion === id ? null : id);
};


return (
<div className="mx-20 mt-36 font-oakes">
    <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
        <img src={QuestionsImg} alt="Questions" className="w-20 sm:size-fit"/>
        <h3 className="p-3 sm:p-8 text-2xl text-center md:text-3xl lg:text-5xl font-semibold text-[#2A2A2A]">
            Smart Question Always Asked
        </h3>
        <p className="md:w-[720px] w-[315px] sm:w-96 text-[#737373] font-light text-center text-sm sm:text-sm md:text-base lg:text-base">
            Get answers to the most common inquiries about MedLinkPro, designed to help you understand how our solutions
            can improve your healthcare experience.
        </p>
    </div>
    <div className="flex flex-col items-center justify-center gap-y-8 font-oakes">
        {questions.map(({id, question, answer}) => (
        <div key={id} className=" flex-col inline-flex items-center justify-center px-6 py-2 rounded-lg shadow-sm cursor-pointer sm:w-[1100px] sm:min-h-[132px] min-h-24 w-[400px] bg-[#F7F7F7]"
            onClick={()=> toggleAnswer(id)}
            >
            <div className="flex w-full justify-between items-center">
                <h3 className="sm:text-3xl text-xl font-medium align-baseline">{question}</h3>
                <div className={`inline-flex items-center justify-center transform-gpu duration-500 ${activeQuestion === id ? 'rotate-180' : ''}`}>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.4"
                        stroke="currentColor" className="sm:size-10 size-6 text-blue-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </motion.svg>
                </div>
              
            </div>
           
                <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={activeQuestion === id ? { height: "80px", opacity: 1 } : { height: 0, opacity: 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="py-2 sm:text-2xl text-sm text-gray-600 overflow-hidden"
                >
                  {answer}
                </motion.p>
              
        </div>
        ))}
    </div>
</div>
)
}

export default Questions

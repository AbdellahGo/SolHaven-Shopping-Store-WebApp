import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FaqAccordion = ({ title, content }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    return (
        <div className='mb-[45px]'>
            <h4 className='font-bold text-18 tracking-[-0.03em] text-theme-1 mb-40'>
                {title}
            </h4>
            <div>
                {content.map(({ id, question, answer }) => (
                    <div key={id} className={`${activeQuestion === id ? 'overflow-visible h-auto' : 'overflow-hidden h-fit'} border-b-1 border-border-1 font-jost font-normal text-16 text-link-color`}>
                        <button className={`${activeQuestion === id ? 'text-heading-secondary' : 'text-link-color'} relative w-full font-medium text-18 pt-20 pb-10 text-start flex justify-between items-center`} onClick={() => setActiveQuestion(prev => prev === id ? null : id)}>
                            {question}
                            <IoIosArrowDown className={`absolute right-0 transform transition-transform ${activeQuestion === id ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        <div className={`pb-30 pr-30 ${activeQuestion === id ? 'block' : 'hidden'}`}>
                            <p className='mb-[15px] leading-[23px]'>
                                {answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion;

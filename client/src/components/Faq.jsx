import React from 'react'
import { container } from '../classes'
import { faqsData } from '../displayedData/data'
import FaqAccordion from './FaqAccordion'

const Faq = () => {
    const { howCanWeHelpYou, shoppingInformation, paymentInformation, orderAndReturns } = faqsData
    const pStyles = 'mb-[15px] font-jost text-16 leading-[28px] text-link-color'
    return (
        <div className='py-80'>
            <div className={`${container} px-12`}>
                <div className='grid lg:grid-cols-2'>
                    <div className='px-12 border-b-1 border-border-1 h-fit mb-60 pb-35 lg:mr-50'>
                        <h4 className='mb-[15px] font-quicksand font-bold text-18 tracking-[-0.03em] text-theme-1'>
                            {howCanWeHelpYou.title}
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: howCanWeHelpYou.desc1 }} className={`${pStyles}`} />
                        <span className='block font-jost text-16 leading-[28px] text-link-color'>{howCanWeHelpYou.steps.title}</span>
                        <ul className='mb-20'>
                            {howCanWeHelpYou.steps.stepsList.map((item) => (
                                <li className='mb-20 font-jost text-16 text-link-color leading-[23px]'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p dangerouslySetInnerHTML={{ __html: howCanWeHelpYou.desc2 }} className={`${pStyles}`} />
                    </div>
                    <div className='px-12'>
                        <FaqAccordion title={shoppingInformation.title} content={shoppingInformation.shoppingInformationList} />
                        <FaqAccordion title={paymentInformation.title} content={paymentInformation.paymentInformationList} />
                        <FaqAccordion title={orderAndReturns.title} content={orderAndReturns.orderAndReturnsList} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq
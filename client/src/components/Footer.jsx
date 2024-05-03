import React, { useEffect, useRef, useState } from 'react'
import { container } from '../classes'
import { footerPayment, message } from '../assets'
import { footerData } from '../displayedData/data'
import { FiCheck } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  const [formCheck, setFormCheck] = useState(false)
  const [inputData, setInputData] = useState('')
  const [alert, setAlert] = useState(false)
  const [rejectedData, setRejectedData] = useState(false)
  const { helpYpu, address, hotCategories, subscribeForm } = footerData
  const h4Styles = 'uppercase font-bold text-14 text-white mb-30 font-quicksand'
  const pStyles = 'text-gray-10 text-16 font-jost leading-[23px]'

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData);
  
    if (emailPattern && formCheck) {
      setInputData('');
      setAlert(true);
      setRejectedData(false);
      setFormCheck(false)
    } else {
      setRejectedData(true);
    }
  };

  useEffect(() => {
    let alertTime;
    let rejectedDataAlert;

    if (alert) {
      alertTime = setTimeout(() => setAlert(false), 1500);
    }
    if (rejectedData) {
      rejectedDataAlert = setTimeout(() => setRejectedData(false), 1500);
    }

    return () => {
      clearTimeout(alertTime);
      clearTimeout(rejectedDataAlert);
    };
  }, [alert, rejectedData]);



  return (
    <footer className='mt-[-2px] '>
      <div className='bg-theme-4 font-jost'>
        <div className='border-b-1 border-indigo-500 pb-[15px]'>
          <div className={`${container} px-12`}>
            <div className='flex flex-wrap'>
              <div className='xl:w-[25%] lg:w-[33.3%] sm:w-[50%] w-full px-12 mb-50'>
                <h4 className={`${h4Styles}`}>
                  {helpYpu.title}
                </h4>
                <p className={`${pStyles}`} >
                  {helpYpu.desc1}
                  <br />
                  {helpYpu.desc2}
                  <a href={`mailto:${helpYpu.email}`} className='text-heading-secondary'> {helpYpu.email}</a>
                </p>
                <div className='mt-[45px]'>
                  <span className='font-jost text-gray-10 block mb-[5px]'>Social Media:</span>
                  {helpYpu.socialMedia.map(({ id, link, icon }) => (
                    <a key={id} href={link} className='hover:bg-heading-secondary border-1 border-white transition-all p-[8px] rounded-full text-white text-16 mr-[8px] inline-block'>
                      <img src={icon} alt="socialMedia icon" className='w-[15px] h-[15px]' />
                    </a>
                  ))}
                </div>
              </div>
              <div className='xl:w-[25%] lg:w-[33.3%] sm:w-[50%] w-full px-12 mb-50'>
                <h4 className={`${h4Styles}`}>{address.title}</h4>
                <p className={`${pStyles}`}>{address.location}</p>
                <div className='mt-35'>
                  {address.workingHours.map(({ id, days, hours }) => (
                    <span key={id} className='font-jost text-16 text-gray-10 block'>
                      {days}
                      <b className='font-normal text-16 text-white'> {hours}</b>
                    </span>
                  ))}
                </div>
              </div>
              <div className='xl:w-[16.6%] md:w-[33.3%] sm:w-[41.6%] w-full px-12 mb-50'>
                <h4 className={`${h4Styles}`}>{hotCategories.title}</h4>
                <ul>
                  {hotCategories.categories.map((item, i) => (
                    <li key={i}>
                      <a href="#" className='hover:pl-10 hover:text-white text-16 text-gray-10 transition-all inline-block mb-8'>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='xl:w-[33.3%] lg:w-[50%] md:w-[66.6%] sm:w-[58.3%] w-full px-12 xl:pl-60 lg:pl-0 md:pl-[130px] mb-50 xl:border-l-1 border-indigo-500'>
                <h4 className='uppercase font-bold text-14 text-white mb-30'>{subscribeForm.title}</h4>
                <div>
                  <p className='text-16 text-white mb-20'>
                    {subscribeForm.desc1}
                    <br />
                    {subscribeForm.desc2}
                  </p>
                  <form className='relative'>
                    {alert || rejectedData ? ( 
                      <>
                        <div className='tooltip absolute bottom-[140%] left-[50%] translate-x-[-50%] p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                          <span className='block'>
                            {alert && 'Thank you for subscribing to solhaven'}
                            {rejectedData && 'Please agree to the terms or check your email before subscribing'}
                          </span>
                        </div>
                        <IoMdArrowDropdown fontSize={45} className='text-white absolute bottom-[87%] left-[50%] translate-x-[-50%]' />
                      </>
                    ) : null}

                    <span className='absolute left-20 top-[50%] translate-y-[-50%]'>
                      <img src={message} alt="message" />
                    </span>
                    <input type="email" onChange={(e) => setInputData(e.target.value)} value={inputData} placeholder='Your email address...' className='rounded-[3px] h-50 w-full bg-white border-none py-[5px] pr-[150px] pl-50 outline-none' />
                    <button className='absolute right-[2px] top-[50%] translate-y-[-50%] font-semibold text-13 font-jost text-white uppercase leading-[19px] py-12 px-30 bg-heading-secondary rounded-[3px]'
                      onClick={handleSubmit}>
                      Subscribe</button>
                  </form>
                  <div className='mt-10 mb-[0.125rem] flex items-center gap-[5px]'>
                    <span className={`flex justify-center items-center transition-all w-14 h-14 rounded-[2px] border-gray-1 ${formCheck ? 'bg-heading-secondary' : 'bg-white border-1'} `}
                      onClick={() => setFormCheck(prev => !prev)}>
                      {formCheck && <FiCheck fontSize={12} color='white' />}
                    </span>
                    <p className='font-jost text-14 text-white'>I accept terms & conditions & privacy policy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-40'>
          <div className={`${container} px-12`}>
            <div className='flex Mmd:gap-20 md:flex-row flex-col Mmd:items-center'>
              <div className='flex-1 px-12'>
                <span className='text-16 text-gray-10 block font-jost'>
                  Copyright &copy;
                  <a href='https://github.com/AbdellahGo' target='_blank' className='text-heading-secondary uppercase'> ABdellahGX </a>
                  all rights reserved. Powered by
                  <a href='https://github.com/AbdellahGo' target='_blank' className='text-heading-secondary'> ABdellahGx</a>.
                </span>
              </div>
              <div className='lg:flex-1 px-12'>
                <img src={footerPayment} alt="footerPayment" className='ml-auto max-w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
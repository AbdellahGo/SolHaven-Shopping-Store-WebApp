import React, { useEffect, useRef, useState } from 'react'
import { container } from '../classes'
import { contactMapFormInputs } from '../displayedData/data'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LocationMap from './LocationMap'
import { IoMdArrowDropdown } from 'react-icons/io'

const ContactMapForm = () => {
    const [formCheck, setFormCheck] = useState(false)
    const [alert, setAlert] = useState(false)
    const [requireFields, setRequireFields] = useState(null)
    const [emailPatternChecker, setEmailPatternChecker] = useState(false)
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputPhone = useRef(null)
    const inputSubject = useRef(null)
    const inputMessage = useRef(null)
    const inputsRef = [inputName, inputEmail, inputSubject, inputPhone, inputMessage]



    const handleSubmit = (e) => {
        const name = inputName.current.value
        const phone = inputPhone.current.value
        const subject = inputSubject.current.value
        const message = inputMessage.current.value
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.current.value);

        if (!emailPattern) {
            setEmailPatternChecker(true)
        }
        if (name && phone && subject && message) {

            if (!formCheck) {
                setAlert(true)
            } else {
                setAlert(true)
                setEmailPatternChecker(false)
                inputsRef.forEach((input) => input.current.value = '')
                setRequireFields(null)
            }
        } else {
            setRequireFields(inputsRef.filter((input) => input.current.value === ''))
        }
    };


    useEffect(() => {
        let alertTime;
        let alertEmailTime;
        if (alert) {
            alertTime = setTimeout(() => setAlert(false), 1500);
        }
        if (emailPatternChecker) {
            alertEmailTime = setTimeout(() => setEmailPatternChecker(false), 1500);
        }
        return () => {
            clearTimeout(alertTime);
            clearTimeout(alertEmailTime);
        };
    }, [alert, emailPatternChecker]);

    return (
        <div className='relative'>
            {console.log(requireFields && requireFields[0].current.id)}
            <div className={`${container} px-12`}>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='md:order-1 order-2 z-[1]'>
                        <LocationMap divStyles={'md:absolute static md:bottom-[0] md:left-0 md:top-0 md:w-[50%] md:z-[-1] w-full Mmd:h-[400px] Mmd:mb-75'} />
                    </div>
                    <div className='md:order-2 order-1 mb-80 md:mt-120 md:ml-60'>
                        <h4 className='font-quicksand font-bold text-24 leading-[30px] tracking-[-0.03em] pb-8 uppercase text-heading-primary'>
                            Leave a Reply
                        </h4>
                        <p className='font-jost text-15 leading-[22px] text-link-color mb-[25px]'>
                            Your email address will not be published. Required fields are marked *
                        </p>
                        <form>
                            <div className='flex flex-wrap items-start relative '>
                                {alert && (
                                    <>
                                        <div className='tooltip absolute top-[-12%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                            <span className='block'>
                                                {!formCheck ? 'Please agree to the terms' : 'Your Reply has been sent successfully'}
                                            </span>
                                        </div>
                                        <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute top-[-7.5%] left-[50%] translate-x-[-50%]' />
                                    </>
                                )}
                                {contactMapFormInputs.map(({ id, text, type, placeholder }, i) => (
                                    <div key={id} className='md:w-[50%] w-full px-12 mb-20 relative'>
                                        {requireFields && requireFields.some(input => input.current.id == id) ? '' :
                                            type === 'email' && emailPatternChecker && (
                                                <>
                                                    <div className='tooltip absolute bottom-[-100%] z-10  left-[50%] -translate-x-[50%]  p-8 font-jost text-12 text-theme-2 rounded-[3px] bg-white  border-1 border-theme-2 w-max'>
                                                        <span className='block'>
                                                            Your email is spelled incorrectly
                                                        </span>
                                                    </div>
                                                    <IoMdArrowDropdown fontSize={45} className='text-theme-2 rotate-180 absolute z-10 bottom-[-60%] left-[50%] translate-x-[-50%]' />
                                                </>
                                            )}

                                        <input ref={inputsRef[i]} id={id} type={type} placeholder={placeholder} className='font-jost w-full h-[50px] rounded-[30px] py-[5px] px-[20px]'
                                            style={{ border: '1px solid #e6ecf0' }} />
                                        {requireFields && requireFields.some(input => input.current.id == id) && ( // Check if input id matches any required field id
                                            <div className='text-theme-2 font-jost text-16 leading-[23px]'>
                                                {`${text} is a required field`}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className='w-full px-12 mb-20'>
                                    <textarea ref={inputMessage} id='5' placeholder='Message' className='w-full h-[200px] outline-none border-1 border-border-1 rounded-[20px] resize-none py-[5px] px-20 font-jost'></textarea>
                                    {console.log(requireFields)}
                                    {requireFields && requireFields.some(input => input.current.id == '5') && (
                                        <div className='text-theme-2 font-jost text-16 leading-[23px]'>
                                            Message is a required field
                                        </div>
                                    )}
                                    <div className='mt-20 mb-[25px] flex items-center gap-[5px]'>
                                        <span className={`flex justify-center items-start transition-all w-14 h-14 border-gray-7 rounded-[2px] ${formCheck ? 'bg-heading-secondary' : 'bg-white border-1 '} `}
                                            onClick={() => setFormCheck(prev => !prev)}>
                                            {formCheck && <FiCheck fontSize={12} color='white' />}
                                        </span>
                                        <p className='font-jost text-15 leading-[22px] text-link-color'>
                                            I am bound by the terms of the
                                            <Link to="/contact" className='text-heading-secondary underline'> Service I accept Privacy Policy.</Link>
                                        </p>
                                    </div>
                                    <button type='submit' className='font-jost font-semibold text-13 leading-[19px] text-center uppercase text-white bg-heading-secondary inline-block py-16 px-50 rounded-[30px]'
                                        onClick={handleSubmit}>
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMapForm
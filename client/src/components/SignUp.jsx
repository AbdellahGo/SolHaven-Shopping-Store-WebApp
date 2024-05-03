import React, { useEffect, useRef, useState } from 'react'
import FormHeader from './FormHeader'
import { GoLock } from "react-icons/go";
import { signUpInputsData } from '../displayedData/data';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

const SignUp = ({ signUpIcons, iconStyles, inputStyles, buttonStyles }) => {
    const [alert, setAlert] = useState(false)
    const inputText = useRef(null)
    const inputPassword = useRef(null)
    const inputEmail = useRef(null)
    const refs = [inputText, inputEmail, inputPassword]

    const handleSubmitForm = (e) => {
        const inputTextValue = inputText.current.value
        const inputPasswordValue = inputPassword.current.value
        const inputEmailValue = inputEmail.current.value
        if (inputPasswordValue && inputEmailValue, inputTextValue) {
            e.preventDefault()
            const userData = { userName: inputTextValue, password: inputPasswordValue, email: inputEmailValue }
            localStorage.setItem('userData', JSON.stringify(userData))
            setAlert(true)
            refs.forEach(item => item.current.value = '')
        }
    }

    useEffect(() => {
        let alertTime;
        if (alert) {
            alertTime = setTimeout(() => setAlert(false), 1500);
        }
        return () => {
            clearTimeout(alertTime);
        };
    }, [alert])

    return (
        <div className='lg:w-6/12 w-full px-12 mb-40'>
            <div className='p-50 rounded-[10px] bg-gray-1'>
                <FormHeader icon={<GoLock className='block' />} title={'Sign Up'}
                    desc='Your personal data will be used to support your experience throughout this website, to manage access to your account.' />
                <form className='relative'>
                    {alert && (
                        <>
                            <div className='tooltip absolute bottom-[107%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                <span className='block'>
                                    You have successfully logged in
                                </span>
                            </div>
                            <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute bottom-[98.5%] left-[50%] translate-x-[-50%]' />
                        </>
                    )}
                    {signUpInputsData.map(({ id, placeholder, type }, i) => (
                        <div key={id} className='mb-10'>
                            <div className='relative'>
                                <span className={`${iconStyles}`}>{signUpIcons[i]}</span>
                                <input ref={refs[i]} required type={type} placeholder={placeholder}
                                    className={`${inputStyles}`} />
                            </div>
                        </div>
                    ))}
                    <div className='mb-[15px]'>
                        <Link className='text-16 text-link-color font-jost'>
                            Already Have Account?
                        </Link>
                    </div>
                    <button type='submit' className={`bg-heading-primary hover:bg-heading-secondary ${buttonStyles}`}
                        onClick={handleSubmitForm}>
                        Register Now
                        <CgArrowLongRight />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
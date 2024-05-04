import React, { useEffect, useRef, useState } from 'react'
import FormHeader from './FormHeader'
import { LiaUserLockSolid } from "react-icons/lia";
import { loginInputsData } from '../displayedData/data';
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdArrowDropdown } from 'react-icons/io';


const Login = ({ loginIcons, iconStyles, inputStyles, buttonStyles }) => {
    const [noUser, setNoUser] = useState(false)
    const [formCheck, setFormCheck] = useState(false)
    const [alert, setAlert] = useState(false)
    const inputPassword = useRef(null)
    const inputEmail = useRef(null)
    const refs = [inputEmail, inputPassword]

    const handleSubmitForm = (e) => {
        const inputPasswordValue = inputPassword.current.value
        const inputEmailValue = inputEmail.current.value
        if (inputPasswordValue && inputEmailValue) {
            e.preventDefault()
            const userData = JSON.parse(localStorage.getItem('userData'))
            if (userData && userData.email === inputEmailValue && userData.password === inputPasswordValue) {
                setAlert(true)
                refs.forEach(item => item.current.value = '')
            } else {
                setNoUser(true)
            }
        }
    }

    useEffect(() => {
        let alertTime;
        let noUserAlertTime;
        if (alert) {
            alertTime = setTimeout(() => setAlert(false), 1500);
        }
        if (noUser) {
            noUserAlertTime = setTimeout(() => setNoUser(false), 1500);
        }
        return () => {
            clearTimeout(alertTime);
            clearTimeout(noUserAlertTime);
        };
    }, [alert, noUser])

    return (
        <div className='lg:w-6/12 w-full px-12 mb-40'>
            <div className='p-50 rounded-[10px] bg-gray-1'>
                <FormHeader icon={<LiaUserLockSolid className='block' />} title={'Login Here'}
                    desc='Your personal data will be used to support your experience throughout this website, to manage access to your account.' />
                <form className='relative'>
                    {alert || noUser ? (
                        <>
                            <div className='tooltip absolute bottom-[110%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                <span className='block'>
                                    {alert && 'You have successfully logged in'}
                                    {noUser && 'Sorry, there is no account that matches the data you entered, Please Sign Up first'}
                                </span>
                            </div>
                            <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute bottom-[98.5%] left-[50%] translate-x-[-50%]' />
                        </>
                    ) : null}
                    {loginInputsData.map(({ id, placeholder, type }, i) => (
                        <div key={id} className='mb-10'>
                            <div className='relative'>
                                <span className={`${iconStyles}`}>{loginIcons[i]}</span>
                                <input ref={refs[i]} required type={type} placeholder={placeholder}
                                    className={`${inputStyles}`} />
                            </div>
                        </div>
                    ))}
                    <div className='mb-[15px] flex sm:flex-row flex-col sm:items-center justify-between'>
                        <div className='flex gap-[5px]'>
                            <input readOnly type="checkbox" id="checkbox" checked={formCheck} className='rounded-[0.25em]'
                                onClick={() => setFormCheck(prev => !prev)} />
                            <label htmlFor="checkbox" className='inline-block font-jost text-link-color'>Remember me</label>
                        </div>
                        <a href="#" className='text-16 Msm:mt-8 text-link-color font-jost'>Forget Password</a>
                    </div>
                    <button type='submit' className={`bg-heading-secondary hover:bg-[#859a00] ${buttonStyles}`}
                        onClick={handleSubmitForm}>
                        Login Now
                        <CgArrowLongRight />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
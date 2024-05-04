import React, { useEffect } from 'react'
import { BreadCrumb, Login, SignUp } from '../components'
import { container } from '../classes'
import { CiUser } from "react-icons/ci";
import { GoKey } from "react-icons/go";
import { CiMail } from "react-icons/ci";

const SignIn = () => {
  const buttonStyles = 'flex justify-center items-center gap-20 transition-all align-middle whitespace-nowrap w-full rounded-[6px] text-white text-16 font-semibold leading-[1] py-[22px] px-50 text-center touch-manipulation'
  const iconStyles = 'absolute top-[50%] translate-y-[-50%] left-[30px] text-16 text-link-color'
  const inputStyles = 'w-full h-60 text-16 text-link-color font-jost bg-white py-10 px-60 rounded-[6px]'
  const loginIcons = [<CiUser  />, <GoKey  />]
  const signUpIcons = [<CiUser />, <CiMail />, <GoKey/>]



  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BreadCrumb small />
      <div className='mb-40'>
        <div className={`${container} px-12`}>
          <div className='flex flex-wrap'>
            <Login buttonStyles={buttonStyles} loginIcons={loginIcons} iconStyles={iconStyles} inputStyles={inputStyles} />
            <SignUp buttonStyles={buttonStyles} signUpIcons={signUpIcons} iconStyles={iconStyles} inputStyles={inputStyles}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
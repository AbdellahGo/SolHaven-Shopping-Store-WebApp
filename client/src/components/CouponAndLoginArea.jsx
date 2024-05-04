import React, { useEffect, useRef, useState } from 'react'
import { container } from '../classes'
import CouponAndLoginHeader from './CouponAndLoginHeader'
import BillingDetails from './BillingDetails'
import YourOrder from './YourOrder'
import { IoMdArrowDropdown } from 'react-icons/io'

const CouponAndLoginArea = () => {
    const [alert, setAlert] = useState(false)
    const inputFirstName = useRef(null)
    const inputLastName = useRef(null)
    const inputCompany = useRef(null)
    const inputAddress = useRef(null)
    const inputApartment = useRef(null)
    const inputCity = useRef(null)
    const inputCounty = useRef(null)
    const inputPostcode = useRef(null)
    const inputPhone = useRef(null)
    const inputEmail = useRef(null)

    const refs = [inputFirstName, inputLastName, inputCompany, inputAddress, inputCity, inputCounty, inputPostcode, inputPhone, inputEmail, inputApartment]

    const handleFormSubmit = (e) => {
        const inputFirstNameValue = inputFirstName.current.value
        const inputLastNameValue = inputLastName.current.value
        const inputCompanyValue = inputCompany.current.value
        const inputAddressValue = inputAddress.current.value
        const inputCityValue = inputCity.current.value
        const inputCountyValue = inputCounty.current.value
        const inputPostcodeValue = inputPostcode.current.value
        const inputPhoneValue = inputPhone.current.value
        const inputEmailValue = inputEmail.current.value
        if (inputFirstNameValue && inputLastNameValue && inputCompanyValue && inputAddressValue && inputCityValue && inputCountyValue && inputPostcodeValue && inputPhoneValue && inputEmailValue) {
            e.preventDefault()
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
        <div className='pb-30 pt-10'>
            <div className={`${container} px-12`}>
                <div className='flex md:flex-row flex-col gap-[24px] mt-10 pb-30'>
                    <CouponAndLoginHeader login h3Text='Returning customer?' spanText='Click here to login' />
                    <CouponAndLoginHeader coupon h3Text='Have a coupon?' spanText='Click here to enter your code' />
                </div>
                <div className='pb-50'>
                    <div className={`${container} px-12`}>
                        <form className='relative'>
                            {alert && (
                                <>
                                    <div className='tooltip absolute bottom-[102%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                        <span className='block'>
                                            {alert && 'Your purchase was successful. Thank you for purchasing from our website'}
                                        </span>
                                    </div>
                                    <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute bottom-[99.8%] left-[50%] translate-x-[-50%]' />
                                </>
                            )}
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[24px]'>
                                <BillingDetails
                                    handleFormSubmit={handleFormSubmit}
                                    alert={alert}
                                    inputApartment={inputApartment}
                                    inputFirstName={inputFirstName}
                                    inputLastName={inputLastName}
                                    inputCompany={inputCompany}
                                    inputAddress={inputAddress}
                                    inputCity={inputCity}
                                    inputCounty={inputCounty}
                                    inputPostcode={inputPostcode}
                                    inputPhone={inputPhone}
                                    inputEmail={inputEmail} />
                                <YourOrder handleFormSubmit={handleFormSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CouponAndLoginArea
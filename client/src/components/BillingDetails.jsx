import React from 'react'

const BillingDetails = ({ inputFirstName, inputLastName, inputCompany, inputAddress, inputCity, inputCounty, inputPostcode, inputPhone, inputEmail, inputApartment}) => {
    const labelStyles = 'text-[#6f7172] block mb-[5px]'
    const countryOption = [
        'United States',
        'Morocco',
        'Canada',
        'Germany',
        'England',
        'Qatar',
        'Dominican Republic'
    ]
    const fields4Refs = [inputCounty, inputPostcode, inputPhone, inputEmail]
    const fields4 = [
        { id: 1, type: 'text', label: 'State / County', placeholder: 'State' },
        { id: 2, type: 'text', label: 'Postcode / Zip', placeholder: 'Postcode / Zip' },
        { id: 3, type: 'email', label: 'Email Address', placeholder: 'email' },
        { id: 4, type: 'number', label: 'Phone', placeholder: 'phone' },
    ]
    return (
        <div>
            <h3 className='border-b-1 border-[#eaedff] text-24 font-jost mb-20 pb-10 w-full'>
                Billing Details
            </h3>
            <div className='flex flex-wrap font-jost'>
                <div className='w-full mb-30'>
                    <label className={`${labelStyles}`}>Country </label>
                    <select className='w-full border-1 border-[#eaedff] px-10 h-[50px] outline-none'>
                        {countryOption.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='w-[50%] mb-30 pr-12'>
                    <label className={`${labelStyles}`}>First Name <span className='text-theme-2'>*</span></label>
                    <input ref={inputFirstName} type='text' required placeholder='First Name' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='w-[50%] mb-30 pl-12'>
                    <label className={`${labelStyles}`}>Last Name  <span className='text-theme-2'>*</span></label>
                    <input ref={inputLastName} type='text' required placeholder='Last Name ' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='w-full mb-30'>
                    <label className={`${labelStyles}`}>Company Name  <span className='text-theme-2'>*</span></label>
                    <input ref={inputCompany} type='text' required placeholder='Company ' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='w-full mb-30'>
                    <label className={`${labelStyles}`}>Address   <span className='text-theme-2'>*</span></label>
                    <input ref={inputAddress} type='text' required placeholder='Address ' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='w-full mb-30'>
                    <input ref={inputApartment} type='text' placeholder='Apartment, suite, unit etc. (optional) ' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='w-full mb-30'>
                    <label className={`${labelStyles}`}>Town / City    <span className='text-theme-2'>*</span></label>
                    <input ref={inputCity} type='text' required placeholder='Town / City ' className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                </div>
                <div className='flex flex-wrap'>
                    {fields4.map(({ id, placeholder, label, type }, i) => (
                        <div key={id} className='w-[50%] odd:pr-12 even:pl-12 mb-30'>
                            <label className={`${labelStyles}`}>{label}<span className='text-theme-2'>*</span></label>
                            <input ref={fields4Refs[i]} required type={type} placeholder={`${placeholder}`} className='bg-white w-full px-10 h-[45px] outline-none' style={{ border: '1px solid #eaedff' }} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='order-notes mb-30'>
                <label className='text-[#6f7172]'>Order Notes</label>
                <textarea placeholder='Notes about your order, e.g. special notes for delivery.'
                    className='border-1 border-[#eaedff] h-120 p-[15px] w-full outline-none resize-none'></textarea>
            </div>
        </div>
    )
}

export default BillingDetails
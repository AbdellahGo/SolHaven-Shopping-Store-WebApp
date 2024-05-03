import React from 'react'

const FormHeader = ({ icon, title, desc }) => {
    return (
        <div className='mb-20 flex sm:flex-row flex-col items-start'>
            <div className='text-16 flex items-center justify-center text-link-color min-h-50 min-w-50 bg-white rounded-[6px] sm:mr-20 Msm:mb-20'>
                {icon}
            </div>
            <div>
                <h4 className='text-18 font-quicksand font-semibold text-heading-primary mb-8'>
                    {title}
                </h4>
                <p className='text-14 font-jost text-link-color leading-[24px] '>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default FormHeader
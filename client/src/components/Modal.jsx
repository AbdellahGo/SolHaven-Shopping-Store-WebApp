import React from 'react'

const Modal = ({ handleCancelModal, children, productModal }) => {
    return (
        <div className={`fixed z-[9999999] top-0 left-0 w-full h-[100vh] ${productModal ? 'visible' : 'invisible'}`}>
                <div className='cursor-pointer fixed z-[9999999] top-0 left-0 bg-[#00000080] w-full h-[100vh]' onClick={handleCancelModal}/>
            {children}
        </div>
    )
}

export default Modal
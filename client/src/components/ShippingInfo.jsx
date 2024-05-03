import React from 'react'
import { FiShield } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { shippingInfoData } from '../displayedData/data';

const ShippingInfo = () => {
    const icons = [<BsBoxSeam />, <FiShield />, <BsBoxSeam />]

    return (
        <div className='border-1 border-[#e8c3c3] rounded-[10px] py-[25px] px-30 mb-30'>
            <ul>
                {shippingInfoData.map(({ id, text }) => (
                    <li key={id} className={`text-center ${id !== 3 ? 'mb-[26px] border-dashed border-b-1 border-[#e8c3c3] pb-30' : ''}`}>
                        <div className='text-[#b45353] text-20 w-fit m-auto'>
                            {icons[id - 1]}
                        </div>
                        <p className='font-jost text-14 leading-[20px] text-center text-[#b45353] ' dangerouslySetInnerHTML={{__html: text}}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShippingInfo
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const YourOrder = ({handleFormSubmit}) => {
    const [activeAccordion, setActiveAccordion] = useState(1)
    const [shippingCheck, setShippingCheck] = useState('pay')
    const { addedProductsId } = useSelector(state => state.cart)
    const customBorder = 'border-b-1 border-[#eaedff]'
    const [tbodyContent, setTbodyContent] = useState(JSON.parse(localStorage.getItem('cart-products')) || [])
    const total = tbodyContent.reduce((acc, product) => acc + (parseInt(product.price) * product.quantity), 0);
    const thStyles = 'font-normal py-[15px] border-t-0 text-[#6f7172] text-left w-[250px] pr-10 whitespace-nowrap'
    const tdStyles = 'border-b-1 border-[#eaedff] text-[#6f7172] text-14 py-[15px] text-left'

    const paymentMethod = [
        {
            id: 1,
            title: 'Direct Bank Transfer',
            text: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.'
        },
        {
            id: 2,
            title: 'Cheque Payment',
            text: 'Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.'
        },
        {
            id: 3,
            title: 'PayPal',
            text: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.'
        },
    ]


    useEffect(() => {
        // Update the products data from localStorage or Redux store when tbodyContent changes
        const productsData = JSON.parse(localStorage.getItem('cart-products')) || [];
        setTbodyContent(productsData);
    }, [addedProductsId]);
    return (
        <div className='md:px-40 md:pt-30 md:pb-[45px] p-[15px] mb-30 border-[3px] border-[#96ae004d]'>
            <h3 className='border-b-1 text-heading-primary border-[#eaedff] text-30 mb-20 pb-10 font-jost w-full'>
                Your order
            </h3>
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className={`${customBorder}`}>
                            <th className={`${thStyles}`}>Product</th>
                            <th className={`${thStyles}`}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbodyContent?.map(({ id, title, price, quantity }) => (
                            <tr className={`hover:bg-[#f9f9f9]`}>
                                <td className={`${tdStyles}`}>
                                    {title}
                                    <strong> x {quantity}</strong>
                                </td>
                                <td className={`${tdStyles}`}>
                                    <span>${price}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className={`${customBorder}`}>
                            <th className={`${thStyles}`}>
                                Cart Subtotal
                            </th>
                            <td className={`${tdStyles}`}>
                                <span>${total}</span>
                            </td>
                        </tr>
                        <tr className={`${customBorder}`}>
                            <th className={`${thStyles}`}>Shipping</th>
                            <td className={`${tdStyles}`}>
                                <div className='flex items-center gap-4' onClick={() => setShippingCheck('pay')}>
                                    <input type="radio" id='shipping' checked={shippingCheck === 'pay' ? true : false} />
                                    <label htmlFor="shipping" className='text-[#6f7172] inline-block'>
                                        Flat Rate: $7.00
                                    </label>
                                </div>
                                <div className='flex items-center gap-4' onClick={() => setShippingCheck('free')}>
                                    <input type="radio" id='free-shipping' checked={shippingCheck === 'free' ? true : false} />
                                    <label htmlFor="free-shipping" className='text-[#6f7172] inline-block'>
                                        Free Shipping:
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr className={`${customBorder}`}>
                            <th className={`${thStyles}`}>Order Total</th>
                            <td className={`${tdStyles}`}>
                                <strong>${shippingCheck === 'pay' ? total + 7 : total}</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div className='mt-40'>
                    <div className=''>
                        {paymentMethod.map(({ id, title, text }) => (
                            <div key={id} className='transition-all h-fit'>
                                <h2>
                                    <a className='cursor-pointer w-full relative flex items-center text-16 font-medium text-heading-primary py-[23px]'
                                        onClick={() => setActiveAccordion(prev => prev === id ? null : id)}>
                                        {title}
                                        {activeAccordion === id ? (
                                            <FaMinus className='absolute right-0' />
                                        ) : (
                                            <FaPlus className='absolute right-0' />
                                        )}
                                    </a>
                                </h2>
                                <div className={`${activeAccordion === id ? 'block' : 'hidden'}`}>
                                    <div className='pt-8 pb-40'>
                                        {text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-20'>
                        <button type='submit' className='w-full bg-heading-secondary hover:bg-heading-primary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase py-[13px] px-[53px] transition-all'
                            onClick={handleFormSubmit}>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourOrder
import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoIosStar, IoMdArrowDropdown } from 'react-icons/io'

const ProductDescription = ({ productData }) => {
    const [productDetailsState, setProductDetailsState] = useState(productData?.product)
    const [alert, setAlert] = useState(false)
    const [ratingNum, setRatingNum] = useState(0)
    const [emptyRating, setEmptyRating] = useState(false)
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputTextArea = useRef(null)
    const inputStyles = 'h-[60px] w-full border-1 border-border-1 rounded-[30px] py-[5px] px-[30px]'
    const [activeButton, setActiveButton] = useState(1)
    const { id, title, reviewsNum, reviews, productDescription, additionalInfo: { description, productDetails } } = productDetailsState
    const h5styles = 'font-jost font-semibold text-13 leading-19 uppercase text-heading-primary mb-8'
    const pStyles = 'font-jost text-16 leading-[28px] text-link-color mb-[15px]'
    const buttons = [{ id: 1, title: 'Product Description' }, { id: 2, title: 'ADDITIONAL INFORMATION' }, { id: 3, title: `Reviews (${reviewsNum})` }]

    const ratingCalc = (n) => {
        const ratingStars = []
        for (let i = 0; i < 5; i++) {
            if (i < n) {
                ratingStars.push(<IoIosStar fontSize={16} color='#ffbc0b' />)
            } else {
                ratingStars.push(<IoIosStar fontSize={16} color='#ccc' />)
            }
        }

        return ratingStars
    }


    const handleSubmitForm = (e) => {
        const inputNameValue = inputName.current.value
        const inputEmailValue = inputEmail.current.value
        const inputTextAreaValue = inputTextArea.current.value
        if (inputNameValue && inputEmailValue && inputTextAreaValue) {
            e.preventDefault()
            if (ratingNum < 1) {
                setEmptyRating(true)
            } else {
                postReviewToApi(inputNameValue, ratingNum, inputTextAreaValue)
                setAlert(true)
                setRatingNum(0)
                inputName.current.value = ''
                inputEmail.current.value = ''
                inputTextArea.current.value = ''
            }
        }
    }

    useEffect(() => {
        let alertTime;
        let emptyRatingTime;
        if (alert) {
            alertTime = setTimeout(() => setAlert(false), 1500);
        }
        if (emptyRating) {
            emptyRatingTime = setTimeout(() => setEmptyRating(false), 1500);
        }
        return () => {
            clearTimeout(alertTime);
            clearTimeout(emptyRatingTime);
        };
    }, [alert, emptyRating])



    const postReviewToApi = async (adminName, adminRating, comment) => {
        const today = new Date();
        const options = {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(today);
        try {
            const data = {
                reviewsNum: reviewsNum + 1,
                review: {
                    id: reviews.length + 1,
                    adminName: adminName,
                    avatar: 'https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?w=740&t=st=1714318023~exp=1714318623~hmac=e413134cd30c036a06bfb382d74dbfaaf425c95fe0c8869df163d7bba0f616f2',
                    adminRating: adminRating,
                    date: `--${formattedDate}:`,
                    comment: comment
                }
            }
            const response = await axios.post(`https://solhaven-shopping-store-webapp.onrender.com//products/${id}`, data, { headers: { 'Content-Type': 'application/json' } });
            setProductDetailsState(response.data.product)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='product-description bg-white mt-30 pt-20 md:px-40 px-20 pb-16 rounded-[10px]'>
            <div className='buttons-container flex items-center justify-center mb-30 border-b-1 border-border-1 Msm:pb-[10px] Msm:overflow-x-scroll'>
                {buttons.map(({ id, title }) => (
                    <button key={id} className={`${activeButton === id ? 'text-heading-secondary' : 'text-[#79819c]'} 
                        font-bold text-14 leading-[18px] tracking-[0.03em] uppercase pb-[14px] mx-[22px]`}
                        style={{ borderBottom: `${activeButton === id ? ' 2px solid #96ae00' : ''}` }}
                        onClick={() => setActiveButton(id)}>
                        {title}
                    </button>
                ))}
            </div>
            {activeButton === 1 && (
                <div>
                    <h5 className={`${h5styles}`}>PRODUCT DETAILS</h5>
                    <p className={`${pStyles} `}>{productDescription}</p>
                </div>
            )}
            {activeButton === 2 && (
                <div>
                    <div>
                        <p className={`${pStyles}`}>{description}</p>
                    </div>
                    <div className='my-30'>
                        <h5 className={`${h5styles}`}>PRODUCT DETAILS</h5>
                        <ul>
                            {productDetails.map((item, i) => (
                                <li key={i} className={`${pStyles}`} style={{ marginBottom: '0' }} >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {activeButton === 3 && (
                <div>
                    <h4 className='text-[24px] text-heading-primary mb-[20px] font-semibold'>{reviewsNum} review for {title} </h4>
                    <div>
                        {reviews.map(({ id, avatar, adminName, adminRating, date, comment }) => (
                            <div key={id} className='flex sm:flex-row flex-col mb-20 pb-20 border-b-1 border-border-1'>
                                <div className='sm:mr-20 Msm:mb-20'>
                                    <img src={avatar} alt="avatar" className='rounded-full object-cover w-[70px] h-[70px]' />
                                </div>
                                <div className='border-1 border-border-1 rounded-[10px] p-[10px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='font-jost font-semibold text-heading-primary text-13 uppercase mr-10'>{adminName}</span>
                                        <div className='rating flex'>
                                            {ratingCalc(adminRating).map((star, i) => (
                                                <Fragment key={i}>
                                                    {star}
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <span className='mb-20 text-[#767676] text-14 font-normal inline-block'>{date}</span>
                                    <p className={`${pStyles}`}>{comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4 className='text-heading-primary font-semibold text-20 mb-[25px]'>Add a review</h4>
                        <form className='relative'>
                            {alert || emptyRating ? (
                                <>
                                    <div className='tooltip absolute top-[-15%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                        <span className='block'>
                                            {emptyRating && 'Please enter your rating'}
                                            {alert && 'Your Reply has been sent successfully'}
                                        </span>
                                    </div>
                                    <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute top-[-9.5%] left-[50%] translate-x-[-50%]' />
                                </>
                            ) : null}
                            <div className='flex flex-wrap'>
                                <div className='sm:w-6/12 w-full sm:pr-12 mb-30'>
                                    <input ref={inputName} type="text" required={true} placeholder='Name' className={`${inputStyles}`} style={{ border: '1px solid #e6ecf0' }} />
                                </div>
                                <div className='sm:w-6/12 w-full sm:pl-12 mb-30'>
                                    <input ref={inputEmail} type="email" required={true} placeholder='Email' className={`${inputStyles}`} style={{ border: '1px solid #e6ecf0' }} />
                                </div>
                                <div className='mb-20'>
                                    <h4 className='font-quicksand mb-8 text-heading-primary text-16 font-semibold'>Your Rating</h4>
                                    <div className='rating flex'>
                                        {ratingCalc(ratingNum).map((star, i) => (
                                            <span key={i} onClick={() => setRatingNum(i + 1)}>
                                                {star}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-full mb-[5px]'>
                                    <textarea ref={inputTextArea} placeholder='Message' required className={`${inputStyles} outline-none`} style={{ height: '220px', borderRadius: '10px' }} />
                                </div>
                                <div className='w-full'>
                                    <div className='mt-[25px]'>
                                        <button type='submit' className='hover:bg-heading-primary transition bg-heading-secondary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase py-[13px] px-[53px]'
                                            onClick={handleSubmitForm}>
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDescription
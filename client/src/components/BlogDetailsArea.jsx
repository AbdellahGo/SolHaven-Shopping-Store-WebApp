import React, { useEffect, useRef, useState } from 'react'
import { container } from '../classes'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward, IoMdArrowDropdown } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
import axios from 'axios'


const BlogDetails = ({ blogId, blogsList, blogDetailsData, setBlogDetailsData }) => {
    const [alert, setAlert] = useState(false)
    const [formCheck, setFormCheck] = useState(false)
    const navigate = useNavigate()
    const { title, author, catLinks, postDate, paragraph1, paragraph2,
        paragraph3, paragraph4, paragraph5, quation,
        mainImage, imagesList, tagged, comments } = blogDetailsData
    const spanStyles = 'font-medium font-jost text-12 uppercase mr-8 pr-10 relative inline-block mb-8'
    const spanStyles2 = 'font-jost font-medium text-12 leading-[17px] uppercase text-heading-primary inline-block mr-8'
    const pStyles = 'font-jost md:text-18 text-16 leading-[1.5] text-link-color mb-[25px]'
    const nextAndPreviousStyles = 'font-quicksand font-bold text-16 leading-18 tracking-[-0.03em] text-heading-primary transition hover:text-heading-secondary'
    const inputStyles = 'h-[60px] w-full border-1 border-border-1 rounded-[30px] py-[5px] px-[30px]'

    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputTextArea = useRef(null)

    const iconsList = [<FaFacebookF />, <FaTiktok />, <FaGithub />, <FaXTwitter />]

    const previousBlog = blogsList.find((blog) => blog.id === blogId - 1)
    const nextBlog = blogsList.find((blog) => blog.id === blogId + 1)

    const handleClickNextOrPrev = (direction) => {
        if (direction === 'next') {
            navigate(`/blog-details/${blogId + 1}`)
        }
        if (direction === 'previous') {
            navigate(`/blog-details/${blogId - 1}`)
        }
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    const handleSubmitForm = (e) => {
        const inputNameValue = inputName.current.value
        const inputEmailValue = inputEmail.current.value
        const inputTextAreaValue = inputTextArea.current.value
        if (inputNameValue && inputEmailValue && inputTextAreaValue) {
            e.preventDefault()
            if (formCheck) {
                const userData = { name: inputNameValue, email: inputEmailValue }
                localStorage.setItem('userData', JSON.stringify(userData))
            }
            postCommentToApi(inputNameValue, inputTextAreaValue)
            setAlert(true)
            inputName.current.value = ''
            inputEmail.current.value = ''
            inputTextArea.current.value = ''
        }
    }

    const postCommentToApi = async (author, comment) => {
        try {
            const data = {
                id: comments.length + 1,
                author: author,
                image: 'https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?w=740&t=st=1714318023~exp=1714318623~hmac=e413134cd30c036a06bfb382d74dbfaaf425c95fe0c8869df163d7bba0f616f2',
                comment: comment
            }
            const response = await axios.post(`https://solhaven-shopping-store-webapp.onrender.com//blogs/${blogId}`, data, { headers: { 'Content-Type': 'application/json' } });
            setBlogDetailsData(response.data.blog)
        } catch (error) {
            console.log(error);
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
        <div className='pb-50 '>
            <div className={`${container} px-12`}>
                <div className='px-12 w-full z-10'>
                    <img src={mainImage} alt="mainImage" className='w-full h-auto' />
                </div>
                <div className='relative px-12 xl:w-10/12 w-full'>
                    <div className='pt-35 xl:pr-[70px] lg:px-[30px] bg-white px-[15px] pb-30 xl:pl-[275px] lg:mt-[-120px]'>
                        <div className='blog-details-content'>
                            <div className='mb-[5px]'>
                                <span className={`${spanStyles} text-heading-secondary`}>
                                    {catLinks}
                                    <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                                </span>
                                <span className={`${spanStyles} text-link-color`}>
                                    {author}
                                    <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                                </span>
                                <span className={`${spanStyles} m-0 p-0 text-link-color`}>
                                    {postDate}
                                </span>
                            </div>
                            <h2 className='font-quicksand font-bold md:text-40 text-18 leading-[1.11] text-heading-primary mb-[25px]'>
                                {title}
                            </h2>
                            <p className={`${pStyles}`}>
                                {paragraph1}
                            </p>
                            <p className={`${pStyles}`}>
                                {paragraph2}
                            </p>
                            <div className='font-jost italic font-normal md:text-24 text-[17px] leading-[1.25] text-heading-primary pt-[15px] text-center pb-40'>
                                <q>{quation}</q>
                            </div>
                            <p className={`${pStyles}`}>
                                {paragraph3}
                            </p>
                        </div>
                        <div className='blog-details-img flex flex-wrap gap-24'>
                            {imagesList?.map((img, i) => (
                                <div key={i} className={`${i === imagesList.length - 1 ? 'w-full' : 'md:flex-1 w-full'}`}>
                                    <img src={img} alt="img" className='w-full rounded-[10px] h-auto' />
                                </div>
                            ))}
                        </div>
                        <div className='blog-details-content mt-30'>
                            <p className={`${pStyles}`}>
                                {paragraph4}
                            </p>
                            <p className={`${pStyles}`}>
                                {paragraph5}
                            </p>
                        </div>
                        <div className='pt-[15px] pb-[25px] border-b-1 border-border-1 mb-[45px] flex flex-wrap items-center'>
                            <div className='xl:w-7/12 lg:w-6/12 w-full px-12'>
                                <span className={`${spanStyles2}`}>Tagged: </span>
                                {tagged?.map((item, i) => (
                                    <Link key={i} to='blog' className='font-jost text-[14px] leading-[20px] text-link-color hover:bg-heading-secondary hover:text-white transition bg-blue-gray-200 py-8 px-20 inline-block rounded-[30px] mb-[5px]'>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className='xl:w-5/12 lg:w-6/12 w-full px-12 Mlg:mt-[15px] lg:text-end text-start'>
                                <span className={`${spanStyles2}`}>Share:</span>
                                {iconsList?.map((icon, i) => (
                                    <a href='#' key={i} className='ml-[5px] cursor-pointer text-[#4d5574] text-16  inline-block'>
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='mb-[15px] flex md:flex-row flex-col'>
                            {previousBlog && (
                                <div className='md:w-6/12 w-full px-12 mb-30'>
                                    <span className='font-jost font-medium text-13 leading-[17px] text-blue-gray-600 mb-10 flex gap-[5px] items-center'>
                                        <IoIosArrowForward className='rotate-180 text-16' />
                                        Previous Post
                                    </span>
                                    <Link onClick={() => handleClickNextOrPrev('previous')} className={`${nextAndPreviousStyles}`}>
                                        {previousBlog?.title}
                                    </Link>
                                </div>
                            )}
                            {nextBlog && (
                                <div className='md:w-6/12 w-full px-12 text-right mb-30'>
                                    <span className='font-jost font-medium text-13 leading-[17px] text-blue-gray-600 mb-10 flex justify-end gap-[5px] items-center'>
                                        Next Post
                                        <IoIosArrowForward className='text-16' />
                                    </span>
                                    <Link onClick={() => handleClickNextOrPrev('next')} className={`${nextAndPreviousStyles}`}>
                                        {nextBlog?.title}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className='bg-gray-8 p-40 border-1 border-border-1 rounded-[10px] mb-[45px] flex md:flex-row flex-col'>
                            <div className='h-80 w-80 md:mr-30 Mmd:mb-20'>
                                <img src='https://orfarm-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-details-author.792fb193.jpg&w=96&q=75' alt="Author image"
                                    className=' w-full h-full rounded-full object-cover' />
                            </div>
                            <div className='flex-1'>
                                <h3 className='font-jost font-semibold text-12 leading-[17px] uppercase text-heading-primary mb-8'>
                                    MICHAEL ANTHONY
                                </h3>
                                <p className='font-jost text-16 leading-[23px] text-link-color mb-[20px]'>
                                    The tiles are highly resistant to water and dirt and can be cleaned, so they are compatible with the cultivation of plants and cooking and the functions.
                                </p>
                                <Link to='/blog' className='font-jost font-semibold text-12 leading-[17px] uppercase text-white bg-heading-primary hover:bg-heading-secondary transition py-[11px] px-[33px] rounded-[30px]'>
                                    All Author Posts
                                </Link>
                            </div>
                        </div>
                        <div className='mb-[65px]'>
                            <h3 className='font-bold text-20 leading-[25px] tracking-[-0.03em] uppercase text-heading-primary mb-[35px]'>
                                LEAVE A COMMENTs
                            </h3>
                            <ul>
                                {comments?.map(({ id, author, image, comment }) => (
                                    <li key={id}>
                                        <div className='border-dashed border-b-1 border-border-1 mb-30 pb-30 flex md:flex-row flex-col'>
                                            <div className='h-[70px] w-[70px] md:mr-[25px] Mmd:mb-20'>
                                                <img src={image} alt="Author image"
                                                    className=' w-full h-full rounded-full object-cover' />
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='font-jost font-semibold text-12 leading-[17px] uppercase text-heading-primary mb-8'>
                                                    {author}
                                                </h3>
                                                <p className='font-jost text-16 leading-[23px] text-link-color mb-[20px]'>
                                                    {comment}
                                                </p>
                                                <Link to='/blog' className='font-jost font-medium text-12 leading-[17px] uppercase text-heading-secondary'>
                                                    Leave Reply
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-heading-primary font-semibold text-20 mb-10'>LEAVE A REPLY</h4>
                            <p className='font-jost text-15 leading-[22px] text-link-color mb-[25px]'>Your email address will not be published. Required fields are marked *</p>
                            <form className='relative'>
                                {alert && (
                                    <>
                                        <div className='tooltip absolute top-[-15%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                            <span className='block'>
                                                Your Reply has been sent successfully
                                            </span>
                                        </div>
                                        <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute top-[-9%] left-[50%] translate-x-[-50%]' />
                                    </>
                                )}
                                <div className='flex flex-wrap'>
                                    <div className='w-6/12 px-12 mb-30'>
                                        <input ref={inputName} type="text" required={true} placeholder='Name' className={`${inputStyles}`} style={{ border: '1px solid #e6ecf0' }} />
                                    </div>
                                    <div className='w-6/12 px-12 mb-30'>
                                        <input ref={inputEmail} type="email" required={true} placeholder='Email' className={`${inputStyles}`} style={{ border: '1px solid #e6ecf0' }} />
                                    </div>
                                    <div className='w-full px-12 mb-[5px]'>
                                        <textarea ref={inputTextArea} required className={`${inputStyles} outline-none`} style={{ height: '220px', borderRadius: '10px' }} />
                                    </div>
                                    <div className='w-full px-12'>
                                        <div className='flex items-center gap-[5px] min-h-[1.5rem]  mb-[0.125rem]'>
                                            <span className={`${!formCheck ? 'p-[6.5px] bg-white border-1 border-blue-gray-300' : ''} bg-heading-secondary rounded-[2px] text-white`}
                                                onClick={() => setFormCheck(prev => !prev)}>
                                                {formCheck ? <IoIosCheckmark /> : ''}
                                            </span>
                                            <label htmlFor='remember' className='text-14 text-link-color font-jost inline-block'>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className='mt-[25px]'>
                                            <button type='submit' className='hover:bg-heading-primary transition bg-heading-secondary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase py-[13px] px-[53px]'
                                                onClick={handleSubmitForm}>
                                                Post Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogDetails
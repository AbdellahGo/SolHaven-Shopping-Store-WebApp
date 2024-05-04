import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const BlogBarList = ({ content }) => {
  const spanStyles = 'font-medium font-jost text-12 uppercase mr-8 pr-10 relative inline-block mb-8'

    return (
      <>
        {content.map(({ id, title, catLinks, author, postDate, paragraph1, mainImage }) => (
          <div key={id} className='relative min-w-[323px] xl:px-0 lg:px-12 rounded-[10px] overflow-hidden'>
            <div className='overflow-hidden w-full rounded-[10px]'>
              <Link to={`/blog-details/${id}`} className='block'>
                <img src={mainImage} alt="blog image" className='w-full hover:scale-[1.1]' style={{ transition: 'all linear 1s' }} />
              </Link>
            </div>
            <div className='bg-white py-20 pr-28 pl-30'>
              <div>
                <span className={`${spanStyles} text-heading-secondary`}>
                  <Link to={`/blog-details/${id}`}>
                    {catLinks}
                    <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                  </Link>
                </span>
                <span className={`${spanStyles} text-link-color`}>
                  {author}
                  <span className='absolute w-[3px] h-[3px] rounded-[50%] bg-[#cfd4de] top-[50%] translate-y-[-50%] right-0' />
                </span>
                <span className={`${spanStyles} m-0 p-0 text-link-color`}>
                  {postDate}
                </span>
              </div>
              <Link to={`/blog-details/${id}`}>
                <h4 className='hover:text-heading-secondary transition font-bold font-quicksand text-18 text-theme-1 mb-[15px] overflow-hidden text-ellipsis line-clamp-2 break-words'>{title}</h4>
              </Link>
              <p className='mb-[25px] text-16 text-link-color font-jost leading-[23px]'>{paragraph1.slice(0, 76)}...</p>
              <div className='font-semibold uppercase text-12 text-heading-secondary'>
                <Link to={`/blog-details/${id}`} className='two-arrow-link font-jost flex items-start gap-[5px]'>
                  Continue reading
                  <div className='move-x-axis-animation'>
                    <MdKeyboardDoubleArrowRight fontSize={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  export default BlogBarList
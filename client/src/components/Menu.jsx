import { FaXmark } from "react-icons/fa6";
import { CiSearch } from 'react-icons/ci'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import { menuSlidToLeft, menuSlidToRight } from "../classes";
import { sideMenuData } from "../displayedData/data";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";



const Menu = ({ toggleMenu, setToggleMenu, menuSearchBarInput, handleSearchBar }) => {
  const [activeLink, setActiveLink] = useState(1)
  const [activeSubLinks, setActiveSubLinks] = useState(false)

  const icons = [<CiUser fontSize={20}/>, <CiHeart fontSize={20}/>]

  const { switchLinks, menuLinks, categoriesLinks, fixedLinks } = sideMenuData

  const displayedLinks = activeLink === 1 ? menuLinks : categoriesLinks


  const handleClick = (item) => {
    item.title !== 'Pages' && setToggleMenu(false)
    activeSubLinks && setActiveSubLinks(false)
  }

  return (
    <div className={`overflow-y-scroll absolute top-0 sm:w-[350px] w-[260px] z-10 h-[100vh] bg-theme-1 transition-1 ${toggleMenu ? menuSlidToRight : menuSlidToLeft}`}>
      <button className='flex gap-1 justify-center items-center w-full h-[45px] uppercase bg-heading-secondary text-white font-jost text-13 font-semibold'
        onClick={() => setToggleMenu(false)}>
        Close
        <FaXmark fontSize={15} />
      </button>
      <div className="px-30 pb-30 mt-20">
        <div className="search">
          <h3 className="text-center uppercase font-quicksand text-13 text-white">What Are You Looking For?</h3>
          <div className="relative py-10 pl-20 pr-[45px] mt-20 flex items-center rounded-[3px] text-14 bg-blue-gray-100">
            <input ref={menuSearchBarInput} type="text" placeholder='Search Product...' className='block w-full bg-blue-gray-100 text-14 placeholder:text-14 text-black placeholder:text-gray-7' />
            <button onClick={() => handleSearchBar('menu')}  className="absolute right-20  ">
              <CiSearch fontSize={16} color="#4d5574" />
            </button>
          </div>
        </div>
        <div className="switch mt-20 flex gap-20">
          {switchLinks.map(({ id, text }) => (
            <button key={id} className={`block rounded-[3px] flex-1 font-jost text-13 font-medium py-10 px-[15px] text-center uppercase 
              ${activeLink === id ? 'bg-heading-secondary text-white' : 'bg-white text-theme-1'}`}
              onClick={() => setActiveLink(id)}>
              {text}
            </button>
          ))}
        </div>
        <div className="links flex flex-col mt-16">
          {displayedLinks.map((item) => (
            <Fragment key={item.id}>
              <Link key={item.id} to={item.link} className={`flex justify-between items-center ${activeLink === 1 ? 'py-10 hover:text-heading-secondary transition' : 'pt-[5px] pb-10'} 
                border-b-1 border-blue-700 font-medium text-16 text-white font-jost`} onClick={() => handleClick(item)}>
                {item.title}
                {item.title === 'Pages' &&
                  (<div onClick={() => setActiveSubLinks((prev) => !prev)} className="cursor-pointer text-white text-18 px-[8px] border-1 border-indigo-800">
                    <span className={`block ${activeSubLinks ? 'text-heading-secondary rotate-45' : 'rotate-0'}`}>+</span>
                  </div>)}
              </Link>
              {item.otherLinks && item.otherLinks.map((item) => (
                <Link key={item.id} to={item.link} className={`${activeSubLinks ? 'flex' : 'hidden'} px-[25px] py-10 hover:text-heading-secondary transition 
                  border-b-1 border-blue-700 font-medium text-16 text-white font-jost`} onClick={() => handleClick(item)}>
                  {item.title}
                </Link>
              ))}
            </Fragment>
          ))}

          {fixedLinks.map(({ id, title, link }, i) => (
            <Link key={id} to={link} className="flex items-center gap-10 py-10 border-b-1 border-blue-700 font-medium text-16 text-white font-jost hover:text-heading-secondary transition"
            onClick={() => setToggleMenu(false)}>
              {icons[i]}
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
import { navContainer } from '../classes.js'
import logo from '../assets/logo.svg'
import { navBarData } from '../displayedData/data.js'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useRef, useState } from 'react';
import { SubMenu, SearchBar, Overlay, Menu, SideCart } from '../components';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [scroll, setScroll] = useState(0)
  const [subMenu, setSubMenu] = useState(false)
  const [toggleSearchBar, setToggleSearchBar] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const { totalQuantityProducts } = useSelector((state) => state.cart)
  const searchBarInput = useRef(null)
  const menuSearchBarInput = useRef(null)
  const navigate = useNavigate()
  const { links1, links2 } = navBarData
  const iconsList = [<CiSearch fontSize={20} />, <CiUser fontSize={20} />, <CiHeart fontSize={20} />, <CiShoppingCart fontSize={20} />]

  const statesList = [toggleCart, toggleMenu, toggleSearchBar]
  const setStatesList = [setToggleCart, setToggleMenu, setToggleSearchBar]
  const handleMouseOver = (otherLinks) => otherLinks && setSubMenu(true);
  const handleMouseLeave = (otherLinks) => otherLinks && setSubMenu(false);

  const handleScroll = () => {
    const scrollYPosition = window.scrollY
    if (scrollYPosition <= 77) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }


  const handleSearchBar = (searchType) => {
    const searchTerm = searchType === 'menu' ? menuSearchBarInput.current.value : searchBarInput.current.value
    setToggleSearchBar(false)
    setToggleMenu(false)
    menuSearchBarInput.current.value = ''
    searchBarInput.current.value = ''
    navigate(`/search?searchText=${searchTerm.trim()}`)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='relative z-[9999999]'>
      <nav className={`border-[1px]  bg-white border-[#e6eaf0] w-full ${scroll ? 'shadow-secondary fixed nav-animation' : ''}`}>
        <div className='relative'>
          <div className={`${navContainer} flex items-center justify-between px-12 relative Mxl:py-20`}>
            <button className='xl:hidden block menu text-theme-1 flex-1' onClick={() => setToggleMenu(true)}>
              <FiMenu fontSize={28} />
            </button>
            <Link to='/' className='Mxl:flex-1'>
              <img src={logo} alt="logo" className='Mxl:m-auto w-[120px] h-[45px]' />
            </Link>
            <div className='links-1 xl:flex hidden xxl:px-[90px] xl:px-[27px] text-link-color'>
              {links1.map((item) => (
                <div key={item.id} className='relative'>
                  <Link to={item.link} className='xxl:px-12 px-10 py-[30px] text-16 font-jost font-medium 
                leading-[15px] hover:text-heading-secondary transition cursor-pointer flex items-center gap-[5px]'
                    onMouseOver={() => handleMouseOver(item.otherLinks)} onMouseLeave={() => handleMouseLeave(item.otherLinks)}>
                    {item.title}
                    {item.otherLinks && (
                      <IoIosArrowDown size={12} />
                    )}
                  </Link>
                  {item.otherLinks && <SubMenu handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} setSubMenu={setSubMenu}
                    subMenu={subMenu} otherLinks={item.otherLinks} />}
                </div>
              ))}
            </div>
            <div className='links-2 flex justify-end items-center gap-10 Mxl:flex-1'>
              {links2.map((item, i) => (
                <div key={item.id} className={`w-[40px] h-[40px] rounded-full ${item.color} flex items-center justify-center ${item.type === 'link' ? 'sm:flex hidden' : ''} ${item.link === 'search' ? 'sm:flex hidden' : ''}`}>
                  {item.type === 'link' ? (
                    <Link to={item.link} className='block'>
                      {iconsList[i]}
                    </Link>
                  ) : (
                    <button className='relative' onClick={() => item.link === 'search' ? setToggleSearchBar(true) : setToggleCart(true)}>
                      {iconsList[i]}
                      {item.link === 'cart' && (
                        <span className='block w-18 h-18 bg-[red] rounded-full text-11 text-white absolute bottom-[80%] left-[80%] '>{totalQuantityProducts}</span>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <SearchBar searchBarInput={searchBarInput} handleSearchBar={handleSearchBar} toggleSearchBar={toggleSearchBar} setToggleSearchBar={setToggleSearchBar} />
          <Menu menuSearchBarInput={menuSearchBarInput} handleSearchBar={handleSearchBar} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <SideCart toggleCart={toggleCart} setToggleCart={setToggleCart} />
          <Overlay dependentStates={statesList} dependentSetStates={setStatesList} />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
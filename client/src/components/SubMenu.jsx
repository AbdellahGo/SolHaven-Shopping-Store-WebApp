import { Link } from 'react-router-dom'

const SubMenu = ({ handleMouseOver, setSubMenu, handleMouseLeave, subMenu, otherLinks }) => {


    return (
        <div className={`${subMenu ? 'sub-menu-slid-to-top visible' : 'sub-menu-slid-to-bottom invisible'} flex flex-col left-0 top-[100%] absolute z-[11]
                 bg-white border-heading-secondary border-t-[2px] py-30 shadow-primary min-w-[270px] rounded-b-[10px]
                 transition-all`}
            onMouseMove={() => subMenu && handleMouseOver(otherLinks)} onMouseLeave={() => subMenu && handleMouseLeave(otherLinks)}>
            {otherLinks.map(({ id, title, link }) => (
                <div key={id} className='font-jost  leading-[16px] pr-20 pl-40 '>
                    <Link to={link} className='text-link-color block py-10 
                    text-16 leading-[21px] hover:text-heading-secondary hover:pl-10 transition-all' onClick={() => setSubMenu(false)}>
                        {title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SubMenu
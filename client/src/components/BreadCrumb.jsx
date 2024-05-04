import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { container } from '../classes';

const BreadCrumb = ({ small, styles, specificLinkName }) => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x);
    const linkStyle = 'capitalize font-jost text-14 leading-[30px]'

    return (
        <div className={`${styles} ${!small ? 'bg-gray-1 pb-[55px] pt-[50px]' : ''}`}>
            <div className={`${container}`}>
                <div className='py-8 px-12'>
                    {!small && <h4 className='text-center capitalize font-quicksand font-bold text-32 leading-[40px] text-heading-primary'>
                        {pathnames[pathnames.length - 1]}</h4>}
                    <div className={`${!small ? 'text-center' : 'text-start'}`}>
                        <Link to="/" className={`${linkStyle} text-blue-gray-600`}>Home</Link>
                        {specificLinkName ? (
                            <span className={`text-theme-1 ${linkStyle}`}> / {specificLinkName}</span>
                        ) : (
                            pathnames.map((name, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathnames.length - 1;
                                return (
                                    <span key={name}>
                                        <span className={`${linkStyle} text-blue-gray-600`}> / </span>
                                        {isLast ? (
                                            <span className={`${index === pathnames.length - 1 ? 'text-theme-1' : ''} ${linkStyle}`}>{name}</span>
                                        ) : (
                                            <Link to={routeTo} className={`${linkStyle} text-blue-gray-600`}>{name}</Link>
                                        )}
                                    </span>
                                );
                            })
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
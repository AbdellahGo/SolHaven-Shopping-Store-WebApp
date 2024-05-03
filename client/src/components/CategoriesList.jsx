import { Link } from 'react-router-dom';
import { paragraphStyle } from '../classes'
import { TfiPlus } from "react-icons/tfi";


const categoriesList = ({categoriesData}) => {
    return (
        <>
            {categoriesData?.map(({ id, title, image, link, numberOfItems }) => (
                <div key={id} className='min-w-[151px] text-center rounded-[10px] bg-white pt-30 px-10 pb-[25px] mb-30'>
                    <div className='category-image w-80 h-80 rounded-full overflow-hidden mx-auto relative flex justify-center items-center'>
                        <img src={image} alt={title} className='w-full h-full' />
                        <Link to={`/${link}`} className='absolute flex w-0 h-0 rounded-full bg-[#00000050] text-white justify-center transition-all items-center text-30'>
                            <TfiPlus />
                        </Link>
                    </div>
                    <Link to='/shop' className='block hover:text-heading-secondary transition text-link-color text-16 font-medium font-jost mt-18'>{title}</Link>
                    <p className={`${paragraphStyle} text-13`}>0{numberOfItems} items</p>
                </div>
            ))}
        </>
    )
}

export default categoriesList
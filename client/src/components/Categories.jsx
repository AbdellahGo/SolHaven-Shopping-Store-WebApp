import { container } from '../classes'
import DragScroll from './DragScroll';
import { CategoriesList } from '.';
import { useRef, useState } from 'react';
import { useGetCategoriesListQuery } from '../redux/RTKApis/productsApi';
import { categoriesData } from '../displayedData/data';


const Categories = () => {
    const {data: categoriesDataApi} = useGetCategoriesListQuery()
    const [scrollLeft, setScrollLeft] = useState(null)
    const slider = useRef(null)


    return (
        <div className='categories bg-gray-1 pb-40'>
            <div className={`${container} px-12 `} >
                <DragScroll setScrollLeft={setScrollLeft} scrollLeft={scrollLeft} slider={slider} sliderStyle='drag-scroll Mxxl:cursor-pointer transition-all flex gap-20 overflow-x-auto'>
                    <CategoriesList categoriesData={categoriesDataApi ? categoriesDataApi : categoriesData}/>
                </DragScroll>
            </div>
        </div>
    )
}

export default Categories

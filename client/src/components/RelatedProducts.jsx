import React from 'react'
import { container } from '../classes'
import ProductsBar from './ProductsBar'

const RelatedProducts = () => {

    return (
        <div className='mb-80 mt-75'>
            <div className={`${container} px-12`}>
                <h5 className='w-full px-12 mb-20 font-jost font-semibold text-13 leading-[19px] uppercase text-heading-primary'>Related Products</h5>
                <ProductsBar relatedProducts={true} />
            </div>
        </div>
    )
}

export default RelatedProducts
import { useEffect } from 'react'
import { BreadCrumb, Error, Loader, RelatedProducts, ShopDetailsArea } from '../components'
import { useGetProductDetailsQuery, useGetProductsListQuery } from '../redux/RTKApis/productsApi'
import { useParams } from 'react-router-dom'
import { container } from '../classes'

function ShopDetails() {

  const { id: productId } = useParams()
  const { data, isLoading, error } = useGetProductDetailsQuery(productId)
  const { data: productsList } = useGetProductsListQuery()




  useEffect(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])



  return (
    <div className='bg-gray-1'>
      <BreadCrumb styles='bg-gray-1' specificLinkName={data?.product?.title} small />
      {!isLoading ? (
        <>
          {!error ? (
            <>
              <ShopDetailsArea productData={data} productId={parseInt(productId)} productsList={productsList} />
              <RelatedProducts />
            </>
          ) : (
            <div className={`${container}`}>
              <Error product />
            </div>
          )}
        </>
      ) : <Loader />}
    </div>
  )
}

export default ShopDetails
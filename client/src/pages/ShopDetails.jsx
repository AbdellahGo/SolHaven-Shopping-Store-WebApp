import { BreadCrumb, RelatedProducts, ShopDetailsArea } from '../components'
import { useGetProductDetailsQuery, useGetProductsListQuery } from '../redux/RTKApis/productsApi'
import { useParams } from 'react-router-dom'

function ShopDetails() {

  const { id: productId } = useParams()
  const { data, isLoading } = useGetProductDetailsQuery(productId)
  const { data: productsList } = useGetProductsListQuery()


  if (isLoading) return 'loading...'

  return (
    <div>
      <BreadCrumb styles='bg-gray-1' specificLinkName={data?.product?.title} small />
      <ShopDetailsArea productData={data} productId={parseInt(productId)} productsList={productsList}/>
      <RelatedProducts/>
    </div>
  )
}

export default ShopDetails
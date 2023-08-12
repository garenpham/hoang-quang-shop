import ProductDetail from '@/components/Product/ProductDetail/ProductDetail'
import { BASE_URL } from '@/constants/urls'
import React from 'react'

export const revalidate = 0
const getProductDetail = async (productId: string) => {
  const res = await fetch(`${BASE_URL}/product/${productId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function Product({
  params: { productId },
}: {
  params: { productId: string }
}) {
  const data = await getProductDetail(productId)
  return (
    <>
      <ProductDetail productDetail={data} />
    </>
  )
}

export default Product

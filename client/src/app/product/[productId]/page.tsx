import ProductDetail from '@/components/Product/ProductDetail/ProductDetail'
import getBasePath from '@/utils/getBasePath'
import React from 'react'

export const revalidate = 0
const getProductDetail = async (productId: string) => {
  const res = await fetch(`${getBasePath()}/api/product/${productId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const getRelatedProducts = async (productId: string) => {
  const res = await fetch(`${getBasePath()}/api/product/related/${productId}`)

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
  const productData = await getProductDetail(productId)
  const relatedProducts = await getRelatedProducts(productId)
  return (
    <>
      <ProductDetail
        productDetail={productData}
        relatedProducts={relatedProducts}
      />
    </>
  )
}

export default Product

'use client'

import { productDetail } from '@/interfaces/productDetail.dto'
import React from 'react'

type Props = {
  productDetail: productDetail
}

const ProductDetail = ({ productDetail }: Props) => {
  console.log(productDetail)

  return <div>ProductDetail</div>
}

export default ProductDetail

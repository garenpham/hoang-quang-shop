'use client'

import { productDetail } from '@/interfaces/productDetail.dto'
import React from 'react'
import Header from '../../Header/Header'
import ProductContent from './ProductContent'

type Props = {
  productDetail: productDetail[]
}

const ProductDetail = ({ productDetail }: Props) => {
  //console.log(productDetail)
  return (
    <>
      <Header />
      <ProductContent productDetail={productDetail[0]} />
    </>
  )
}

export default ProductDetail

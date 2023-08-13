'use client'

import Footer from '@/components/Footer/Footer'
import { productDetail } from '@/interfaces/productDetail.dto'
import React from 'react'
import Header from '../../Header/Header'
import ProductContent from './ProductContent'
import ProductDescription from './ProductDescription'
import ProductRelated from './ProductRelated'

type Props = {
  productDetail: productDetail
}

const ProductDetail = ({ productDetail }: Props) => {
  //console.log(productDetail)
  return (
    <>
      <Header />
      <div className="bg-white px-[--root-margin]">
        <ProductContent productDetail={productDetail} />
        <ProductDescription productDetail={productDetail} />
        <ProductRelated />
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail

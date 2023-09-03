'use client'

import Footer from '@/components/Footer/Footer'
import { productDetail } from '@/interfaces/productDetail.dto'
import { relatedProductsDto } from '@/interfaces/relatedProducts.dto'
import React from 'react'
import Header from '../../Header/Header'
import ProductContent from './ProductContent'
import ProductDescription from './ProductDescription'
import ProductsRelatedSection from './RelatedSection/ProductsRelatedSection'

type Props = {
  productDetail: productDetail
  relatedProducts: relatedProductsDto
}

const ProductDetail = ({ productDetail, relatedProducts }: Props) => {
  //console.log(productDetail)
  console.log(relatedProducts)
  return (
    <>
      <Header />
      <div className="bg-white px-[--root-margin]">
        <ProductContent productDetail={productDetail} />
        <ProductDescription productDetail={productDetail} />
        <ProductsRelatedSection />
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail

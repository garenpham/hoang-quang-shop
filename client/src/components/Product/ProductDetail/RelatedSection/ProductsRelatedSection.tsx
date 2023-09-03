import { relatedProductDto } from '@/interfaces/relatedProduct.dto'
import React from 'react'
import RelatedProduct from './RelatedProduct'

type Props = {
  relatedProducts: relatedProductDto[]
}

const ProductsRelatedSection = ({ relatedProducts }: Props) => {
  return (
    <>
      <h2 className='text-2xl font-[900] uppercase tracking-[2px]'>
        Sản phẩm liên quan
      </h2>

      <div className='flex flex-wrap gap-[1rem] py-[1rem]'>
        {relatedProducts.map((product) => (
          <RelatedProduct key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductsRelatedSection

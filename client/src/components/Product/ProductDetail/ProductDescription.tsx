import { productDetail } from '@/interfaces/productDetail.dto'
import React from 'react'
import { BsDot } from 'react-icons/bs'

type Props = {
  productDetail: productDetail
}

const ProductDescription = ({ productDetail }: Props) => {
  const { description } = productDetail
  return (
    <>
      <div className="mt-[64px]">
        <div className="text-3xl font-semibold uppercase">
          <div className={`h-[1px] w-full bg-gray-300`} />
          <div className="border-t-[2px] border-[--secondary-color] w-fit pt-[14px]">
            Thông tin sản phẩm
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        {description.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <BsDot className="text-[20px]" /> {item}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductDescription

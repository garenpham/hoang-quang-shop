'use client'

import styles from '@/components/assets/globalStyles'
import { productDetail } from '@/interfaces/productDetail.dto'
import Link from 'next/link'
import React from 'react'

type Props = {
  productDetail: productDetail
}

const ProductContent = ({ productDetail }: Props) => {
  const { generalType, specificType, name } = productDetail
  const style = {
    link: `capitalize hover:text-[--secondary-color] active:scale-95 ${styles.hover_click}`,
    line: `h-[1px] w-full bg-gray-300`,
  }
  return (
    <div className="px-[--root-margin]">
      <div className="flex items-center gap-[10px] mt-[20px] text-[13px]">
        <Link href={'/'} className={`${style.link} normal-case`}>
          Trang chủ
        </Link>
        <div className="font-bold">&ndash;</div>
        <Link href={'#'} className={style.link}>
          {specificType}
        </Link>
        <span className="font-bold">&ndash;</span>
        <Link href={'#'} className={style.link}>
          {generalType}
        </Link>
        <span className="font-bold">&ndash;</span>
        <span className="capitalize text-[--secondary-color]">{name}</span>
      </div>
      <div className="font-bold capitalize text-[40px] my-[14px]">{name}</div>
      <div className="flex">
        <div className="flex-[1_1_50%]">Hello</div>
        <div className="flex-[1_1_50%]">Hi</div>
      </div>
    </div>
  )
}

export default ProductContent

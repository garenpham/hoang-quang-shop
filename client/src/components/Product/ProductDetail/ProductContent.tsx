'use client'

import styles from '@/components/assets/globalStyles'
import { productDetail } from '@/interfaces/productDetail.dto'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

type Props = {
  productDetail: productDetail
}

const ProductContent = ({ productDetail }: Props) => {
  const { generalType, specificType, name ,images} = productDetail
  const style = {
    link: `capitalize hover:text-[--secondary-color] hover:scale-105 active:scale-100 ${styles.hover_click}`,
    line: `h-[1px] w-full bg-gray-300`,
  }
  return (
    <div className="px-[--root-margin]">
      <div className="flex items-center gap-[6px] mt-[20px] text-[13px]">
        <Link href={'/'} className={`${style.link} normal-case`}>
          Trang chủ
        </Link>
        <MdKeyboardArrowRight className="text-[20px]" />
        <Link href={'#'} className={style.link}>
          {specificType}
        </Link>
        <MdKeyboardArrowRight className="text-[20px]" />
        <Link href={'#'} className={style.link}>
          {generalType}
        </Link>
        <MdKeyboardArrowRight className="text-[20px]" />
        <span className="capitalize text-[--secondary-color]">{name}</span>
      </div>
      <div className="font-bold capitalize text-[40px] my-[14px]">{name}</div>
      <div className="flex">
        <div className="basis-[50%]">Hello</div>
        <div className="basis-[50%]">Hi</div>
      </div>
    </div>
  )
}

export default ProductContent

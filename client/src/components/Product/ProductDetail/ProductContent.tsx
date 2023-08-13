'use client'

import { roboto } from '@/components/assets/fonts'
import styles from '@/components/assets/globalStyles'
import { productDetail } from '@/interfaces/productDetail.dto'
import { urlFor } from '@/utils/client'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

type Props = {
  productDetail: productDetail
}

const ProductContent = ({ productDetail }: Props) => {
  const {
    generalType,
    specificType,
    name,
    images,
    price,
    isAvailable,
    description,
    manufacturer,
  } = productDetail
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
      <div className="flex gap-[10%]">
        <div className="basis-[50%]">
          <Image
            alt="product"
            src={urlFor(images[0]).url()}
            height={0}
            width={0}
            sizes="100%"
            className="w-full h-auto"
          />
        </div>
        <div className="basis-[40%] flex flex-col gap-[24px]">
          {price ? (
            <div className="text-base lg:text-3xl font-bold text-[--primary-color]">
              {formatPrice(price)} <span className="underline">đ</span>{' '}
            </div>
          ) : (
            <div className="text-base lg:text-3xl font-bold text-[--primary-color]">
              Liên Hệ
            </div>
          )}
          <div>
            <p className="text-[20px]">
              Tình trạng:{' '}
              {isAvailable ? (
                <span className="text-green-600 font-semibold text-[24px]">
                  Còn Hàng
                </span>
              ) : (
                <span
                  className={`${roboto.className} text-gray-500 font-[900] text-[24px]`}>
                  Hết Hàng
                </span>
              )}
            </p>
            <p className="text-[20px] pt-[8px]">
              Hãng sản xuất:{' '}
              <span className="capitalize text-[24px]">{manufacturer}</span>
            </p>
          </div>
          <div className={style.line} />
          <div className="flex items-center gap-[8px]">
            Gọi đặt mua:{' '}
            <Link
              href="tel:0938460990"
              className="text-[--primary-color] font-bold text-[20px]">
              0938 460 990
            </Link>{' '}
            (6:00 - 19:00)
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductContent

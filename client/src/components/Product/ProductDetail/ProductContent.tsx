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
    manufacturer,
  } = productDetail

  const [slide, setSlide] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      const imageFocus = document.getElementById(
        `${slide === images.length - 1 ? 0 : slide + 1}`
      )
      if (imageFocus) imageFocus.scrollIntoView()
    }, 10000)
    return () => clearInterval(interval)
  }, [images.length, slide])

  const style = {
    link: `capitalize hover:text-[--secondary-color] hover:scale-105 active:scale-100 ${styles.hover_click}`,
    line: `h-[1px] w-full bg-gray-300`,
  }
  return (
    <>
      <div className="flex items-center gap-[6px] pt-[20px] text-[13px]">
        <Link href={'/'} className={`${style.link} normal-case`}>
          Trang chủ
        </Link>

        {specificType && (
          <>
            <MdKeyboardArrowRight className="text-[20px]" />
            <Link href={'#'} className={style.link}>
              {specificType.name}
            </Link>
          </>
        )}

        {generalType && (
          <>
            <MdKeyboardArrowRight className="text-[20px]" />
            <Link href={'#'} className={style.link}>
              {generalType.name}
            </Link>
          </>
        )}

        <MdKeyboardArrowRight className="text-[20px]" />
        <span className="capitalize text-[--secondary-color]">{name}</span>
      </div>
      <div className="font-bold capitalize text-[40px] my-[14px]">{name}</div>
      <div className="flex gap-[10%]">
        <div className="basis-[50%]">
          {images.map((image, idx) => (
            <div key={idx + 1}>
              {slide === idx && (
                <Image
                  alt="product"
                  src={urlFor(image).url()}
                  height={0}
                  width={0}
                  sizes="100%"
                  className="w-full"
                />
              )}
            </div>
          ))}
          <div className="w-full flex overflow-x-scroll">
            {images.map((image, idx) => (
              <Image
                key={idx}
                id={`${idx}`}
                alt={name}
                src={urlFor(image).url()}
                height={0}
                width={0}
                sizes="100%"
                onClick={() => setSlide(idx)}
                className={`mt-[20px] shrink-0 basis-[25%] cursor-pointer object-cover ${
                  slide !== idx && 'opacity-80 brightness-[.8] blur-[.8px]'
                } hover:opacity-100 hover:blur-0 hover:brightness-100 ${
                  styles.hover_click
                }`}
              />
            ))}
          </div>
        </div>
        <div className="basis-[40%] flex flex-col gap-[24px]">
          {price ? (
            <div className="text-base lg:text-4xl font-bold text-[--primary-color]">
              {formatPrice(price)} <span className="underline">đ</span>{' '}
            </div>
          ) : (
            <div className="text-base lg:text-4xl font-bold text-[--primary-color]">
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
            <span className="font-semibold">Gọi đặt mua:</span>{' '}
            <Link
              href="tel:0938460990"
              className="text-[--primary-color] font-bold text-[20px]">
              0938 460 990
            </Link>{' '}
            (6:00 - 19:00)
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductContent

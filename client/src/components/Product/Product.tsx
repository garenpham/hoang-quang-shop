import { HomeProduct } from '@/interfaces/homeProducts.dto'
import { urlFor } from '@/utils/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../assets/globalStyles'

type Props = {
  product: HomeProduct
}

const style = {
  layout: `w-full max-w-[45%] lg:max-w-[23.5%]`,
  container: `group rounded-2xl shadow-xl lg:shadow-none hover:shadow-xl p-4 hover:scale-105 active:scale-100 ${styles.hover_click}`,
}

const Product = ({ product }: Props) => {
  const { image, name, price } = product
  const formatPrice = (price: string) => {
    let formattedPrice = ''
    let count = 0
    for (let i = price.length - 1; i >= 0; i--) {
      if (count === 3) {
        formattedPrice = ',' + formattedPrice
        count = 0
      }
      formattedPrice = price[i] + formattedPrice
      count++
    }
    return formattedPrice
  }

  return (
    <Link href="#" className={style.layout}>
      <div className={style.container}>
        <Image
          src={urlFor(image).url()}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto pb-4"
        />
        <div className="">
          <p className="text-xs lg:text-base group-hover:font-bold group-hover:drop-shadow-xl">
            {name}
          </p>
          <p className="text-base lg:text-3xl font-semibold text-[--primary-color] pb-0 lg:pb-4">
            {formatPrice(price.toString())}
            <span className="underline">đ</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Product
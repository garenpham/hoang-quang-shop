import styles from '@/components/assets/globalStyles'
import { relatedProductDto } from '@/interfaces/relatedProduct.dto'
import { urlFor } from '@/utils/client'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: relatedProductDto
}

const style = {
  layout: `w-full max-w-[47%] lg:max-w-[23.5%]`,
  container: `group lg:rounded-2xl shadow lg:shadow-none hover:shadow-xl p-1 lg:p-4 hover:scale-105 active:scale-100 ${styles.hover_click}`,
}

const RelatedProduct = ({ product }: Props) => {
  const { _id, images, name, price } = product

  return (
    <Link href={`/product/${_id}`} className={style.layout}>
      <div className={style.container}>
        <Image
          src={urlFor(images[0]).url()}
          alt={name}
          height={0}
          width={0}
          sizes="100%"
          className="w-full pb-4"
        />
        <div className="">
          <p className="text-xs lg:text-base group-hover:font-bold group-hover:drop-shadow-xl">
            {name}
          </p>
          <p className="text-base lg:text-3xl font-semibold text-[--primary-color] pb-0 lg:pb-4">
            {price ? (
              <>
                {formatPrice(price)} <span className="underline">đ</span>{' '}
              </>
            ) : (
              'Liên Hệ'
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default RelatedProduct

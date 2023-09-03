import { HomeProduct } from '@/interfaces/homeProducts.dto'
import { urlFor } from '@/utils/client'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../assets/globalStyles'

type Props = {
  product: HomeProduct
}

const style = {
  layout: `w-full max-w-[47%] xl:max-w-[23.5%]`,
  container: `group xl:rounded-2xl shadow xl:shadow-none hover:shadow-xl p-1 xl:p-4 hover:scale-105 active:scale-100 ${styles.hover_click}`,
}

const HomeProduct = ({ product }: Props) => {
  const { _id, images, name, price } = product

  return (
    <Link href={`/product/${_id}`} className={style.layout}>
      <div className={style.container}>
        <Image
          src={urlFor(images[0]).url()}
          alt={name}
          height={0}
          width={0}
          sizes='100%'
          className='w-full pb-4'
        />
        <div className=''>
          <p className='text-xs xl:text-base group-hover:font-bold group-hover:drop-shadow-xl'>
            {name}
          </p>
          <p className='text-base xl:text-3xl font-semibold text-[--primary-color] pb-0 xl:pb-4'>
            {price ? (
              <>
                {formatPrice(price)} <span className='underline'>đ</span>{' '}
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

export default HomeProduct

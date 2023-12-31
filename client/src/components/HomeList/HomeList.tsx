'use client'

import { HomeProductsDto } from '@/interfaces/homeProducts.dto'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Link from 'next/link'
import { useState } from 'react'
import HomeProduct from '../Product/HomeProduct/HomeProduct'
import styles from '../assets/globalStyles'

type Props = {
  data: HomeProductsDto
}

const HomeList = ({ data }: Props) => {
  const [categoryToggle, setCategoryToggle] = useState(false)

  const { name, products, specificTypes } = data

  const style = {
    wrapper: `px-[--root-margin] pb-[1.4rem]`,
    img: `relative w-[100vw] h-[100vh] `,
    line: `bg-[--primary-color] h-[3.4px] mt-[2rem] mb-[2px]`,
    menu: `flex flex-col xl:flex-row justify-between mb-[.4rem] xl:items-center`,
    titleContainer: `rounded-br-full bg-[--primary-color] px-[1.8rem] h-[3rem] flex flex-col justify-center uppercase text-xl text-center text-white font-bold`,
    categoryContainer: `${
      categoryToggle ? 'flex' : 'hidden xl:flex'
    } flex-col xl:flex-row text-sm items-start`,
    productContainer: `flex flex-wrap gap-[1rem]`,
  }

  return (
    <>
      <article id={name} className={style.wrapper}>
        <div className='flex flex-col text-center mt-[.8rem] xl:mt-[2rem] uppercase xl:gap-[.5rem]'>
          <p className='italic text-[--primary-color] xl:text-4xl'>
            Chuyên kinh doanh. Sửa chữa. Lắp đặt:
          </p>
          <p className='text-[--secondary-color] font-bold xl:text-[2.34rem]'>
            Điện nước dân dụng - Ống nước <br className='block xl:hidden' />-
            Vật liệu xây dựng
          </p>
        </div>
        <div className={style.line} />
        <div className={style.menu}>
          <div className='flex justify-between'>
            <Link href='#' className={style.titleContainer}>
              <h2 className={`pr-[.4rem] ${styles.menuTitle}`}>{name}</h2>
            </Link>
            <div
              className='flex xl:hidden bg-[--background-color] h-[3rem] flex-col justify-center'
              onClick={() => setCategoryToggle(!categoryToggle)}>
              {' '}
              <MoreVertIcon
                sx={{
                  fontSize: 34,
                  color: 'var(--primary-color)',
                }}
              />
            </div>
          </div>

          <div className={style.categoryContainer}>
            {specificTypes.map((category) => (
              <Link
                href='#'
                key={category._id}
                className={`w-full xl:w-auto mr-4 py-3 xl:py-0 hover:text-[--secondary-color] hover:scale-105 active:scale-95 ${styles.hover_click} border-b-[2px] border-dotted xl:border-none`}>
                <p className='first-letter:uppercase'>{category.name}</p>
              </Link>
            ))}

            <Link
              href='#'
              className={`pt-3 xl:pt-0 text-gray-400 font-semibold hover:text-[--secondary-color] hover:scale-105 active:scale-95 ${styles.hover_click}`}>
              Xem tất cả
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </Link>
          </div>
        </div>

        <div className={style.productContainer}>
          {products.map((product) => (
            <HomeProduct key={product._id} product={product} />
          ))}
        </div>
      </article>
    </>
  )
}

export default HomeList

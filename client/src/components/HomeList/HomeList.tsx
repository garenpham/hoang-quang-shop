import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Link from 'next/link'
import { useState } from 'react'
import Product from '../Product/Product'
import styles from '../assets/globalStyles'

type Props = {
  title: string
  categories: string[]
}

const HomeList = ({ title, categories }: Props) => {
  const [categoryToggle, setCategoryToggle] = useState(false)

  const style = {
    wrapper: `px-[--root-margin] pb-[1.4rem]`,
    img: `relative w-[100vw] h-[100vh] `,
    line: `bg-[--primary-color] h-[3.4px] mt-[2rem] mb-[2px]`,
    menu: `flex flex-col lg:flex-row justify-between mb-[.4rem]`,
    titleContainer: `rounded-br-full bg-[--primary-color] px-[1.8rem] h-[3rem] flex flex-col justify-center uppercase text-xl text-center text-white font-bold`,
    categoryContainer: `${
      categoryToggle ? 'flex' : 'hidden lg:flex'
    } flex-col lg:flex-row text-sm items-start lg:items-center`,
    productContainer: `flex flex-wrap gap-[1rem] justify-center lg:justify-start`,
  }

  return (
    <>
      <article id={title} className={style.wrapper}>
        <div className="flex flex-col text-center mt-[2rem] uppercase lg:gap-[.5rem]">
          <p className="italic text-[--primary-color] lg:text-4xl">
            Chuyên kinh doanh. Sửa chữa. Lắp đặt:
          </p>
          <p className="text-[--secondary-color] font-bold lg:text-[2.34rem]">
            Điện nước dân dụng - Ống nước <br className="block lg:hidden" />-
            Vật liệu xây dựng
          </p>
        </div>
        <div className={style.line} />
        <div className={style.menu}>
          <div className="flex justify-between">
            <Link href="#" className={style.titleContainer}>
              <h2 className={`pr-[.4rem] ${styles.menuTitle}`}>{title}</h2>
            </Link>
            <div
              className="flex lg:hidden bg-[--background-color] h-[3rem] flex-col justify-center"
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
            {categories.map((category) => (
              <Link
                href="#"
                key={category}
                className={`w-full lg:w-auto mr-4 py-3 hover:text-[--secondary-color] hover:scale-105 active:scale-95 ${styles.hover_click} border-b-[2px] border-dotted lg:border-none`}>
                {category}
              </Link>
            ))}

            <Link
              href="#"
              className={`pt-3 lg:pt-0 text-gray-400 font-semibold hover:text-[--secondary-color] hover:scale-105 active:scale-95 ${styles.hover_click}`}>
              Xem tất cả
              <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
            </Link>
          </div>
        </div>

        <div className={style.productContainer}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </article>
    </>
  )
}

export default HomeList

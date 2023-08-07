import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../assets/globalStyles'

type Props = {}

const style = {
  layout: `w-full max-w-[45%] lg:max-w-[23.5%]`,
  container: `group rounded-2xl shadow-xl lg:shadow-none hover:drop-shadow-xl hover:shadow-xl p-4 hover:scale-105 ${styles.hover_click}`,
}

const Product = (props: Props) => {
  return (
    <Link href="#" className={style.layout}>
      <div className={style.container}>
        <Image
          src="https://diennuocvantu.com/upload/product/day-cap-dien-cv4-52.jpg"
          alt="Dây cáp điện CV 4.0"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto pb-4"
        />
        <div className="">
          <p className="text-xs lg:text-base group-hover:font-bold">
            Dây cáp điện CV 4.0
          </p>
          <p className="text-base lg:text-3xl font-semibold text-[--primary-color] pb-0 lg:pb-4">
            1,507,000<span className="underline">đ</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Product


  // useLayoutEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       // console.log(urlFor(data[0].products[0].image).url())
  //     })
  // }, [])
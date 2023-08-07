'use client'

import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Menu from '@/components/Header/Menu/Menu'
import HomeList from '@/components/HomeList/HomeList'
import { HomeProductsDto } from '@/interfaces/homeProducts.dto'
import { useState } from 'react'

type Props = {
  data: HomeProductsDto
}

const HomePage = ({ data }: Props) => {
  const [toggle, setToggle] = useState(false)

  const categories = [
    'Công tắc, ổ cắm',
    'Dây cáp điện',
    'Ống điện và phụ kiện',
    'Quạt điện',
  ]

  const setToggleFn = (value: boolean) => {
    setToggle(value)
  }

  return (
    <>
      {toggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-10 touch-none"
          onClick={() => setToggle(false)}></div>
      )}

      <Header />
      <Menu toggle={toggle} setToggleFn={setToggleFn} />
      <HomeList title="Thiết bị Điện" categories={categories} data={data} />
      <Contact />
      <Footer />
    </>
  )
}
export default HomePage

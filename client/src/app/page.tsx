"use client";

import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HomeList from '@/components/HomeList/HomeList'
import Menu from '@/components/Menu/Menu'
import { useLayoutEffect, useState } from 'react'

export default function Home() {
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

  // console.log(toggle);
  useLayoutEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return (
    <>
      {toggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-10 touch-none"
          onClick={() => setToggle(false)}></div>
      )}

      <Header />
      <Menu toggle={toggle} setToggleFn={setToggleFn} />
      <HomeList title="Thiết bị Điện" categories={categories} />
      <Contact />
      <Footer />
    </>
  )
}

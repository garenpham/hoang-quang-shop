"use client";

import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import HomeList from '@/components/HomeList/HomeList'
import Menu from '@/components/Menu/Menu'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [toggle, setToggle] = useState(false)

  const pathname = usePathname()
  useEffect(() => {
    setToggle(false)
    console.log(pathname)
  }, [pathname])

  const categories = [
    'Công tắc, ổ cắm',
    'Dây cáp điện',
    'Ống điện và phụ kiện',
    'Quạt điện',
  ]

  // console.log(toggle);

  return (
    <>
      {toggle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-10 touch-none"
          onClick={() => setToggle(false)}></div>
      )}

      <Header setToggle={setToggle} />
      <Menu toggle={toggle} setToggle={setToggle} />
      <HomeList
        title="Thiết bị Điện"
        categories={categories}
        setToggle={setToggle}
      />
      <Contact setToggle={setToggle} />
      <Footer setToggle={setToggle} />
    </>
  )
}

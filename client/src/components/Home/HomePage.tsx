'use client'

import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Menu from '@/components/Header/Menu/Menu'
import HomeList from '@/components/HomeList/HomeList'
import { HomeProductsDto } from '@/interfaces/homeProducts.dto'
import { useState } from 'react'

type Props = {
  dataList: HomeProductsDto[]
}

const HomePage = ({ dataList }: Props) => {
  //console.log(dataList)

  return (
    <>
      <Header />
      {dataList.map((data) => (
        <div key={data._id}>
          {data.products.length > 0 && <HomeList data={data} />}
        </div>
      ))}
      <Contact />
      <Footer />
    </>
  )
}
export default HomePage

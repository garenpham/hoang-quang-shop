'use client'

import Logo from '@/components/assets/Logo'
import React from 'react'
import Menu from './Menu/Menu'
import Nav from './Nav/Nav'
import Search from './Search/Search'

const style = {
  wrapper: `flex flex-col xl:flex-row justify-center xl:justify-between pt-[1rem] pb-[1.4rem] xl:pb-[1.6rem] px-[--root-margin]`,
  logo_search: `flex gap-8 flex-col xl:flex-row`,
}

type Props = {}

const Header = (props: Props) => {
  const [toggle, setToggle] = React.useState(false)
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
      <header className={style.wrapper}>
        <div className={style.logo_search}>
          <Logo />
          <Search />
        </div>
        <Nav />
      </header>
      <Menu toggle={toggle} setToggleFn={setToggleFn} />
    </>
  )
}

export default Header

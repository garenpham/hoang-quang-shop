import Logo from '@/components/assets/Logo'
import React from 'react'
import Nav from './Nav/Nav'
import Search from './Search/Search'

const style = {
  wrapper: `flex flex-col lg:flex-row justify-center lg:justify-between pt-[1rem] pb-0 lg:pb-[1.6rem] px-[--root-margin]`,
  logo_search: `flex gap-8 flex-col lg:flex-row`,
}

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={style.wrapper}>
      <div className={style.logo_search}>
        <Logo />
        <Search />
      </div>
      <Nav />
    </header>
  )
}

export default Header

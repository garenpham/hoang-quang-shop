import { useWindowSize } from '@/utils/useWindowSize'
import MenuIcon from '@mui/icons-material/Menu'
import NearMeIcon from '@mui/icons-material/NearMe'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import styles from '../../assets/globalStyles'

const MenuXl = () => {
  const style = {
    wrapper: `hidden lg:flex px-[--root-margin] bg-gradient-to-r from-[--secondary-color] via-sky-500 via-40% to-[--secondary-color] text-white uppercase text-2xl font-semibold gap-[4rem] h-14 items-center`,
    item: `hover:text-[#FF0000] hover:scale-105 active:scale-95 ${styles.hover_click}`,
    menuItem: `h-full flex flex-col justify-center bg-[--primary-color] px-4 rounded-r-full -mr-8`,
    menuItem__text: `${styles.menuTitle} pr-[1rem] flex items-center`,
  }
  return (
    <section id="menu" className={style.wrapper}>
      <Link href="#" className={style.menuItem}>
        <div className={style.menuItem__text}>
          {' '}
          <MenuIcon sx={{ fontSize: 34 }} /> &nbsp; Mục lục sản phẩm
        </div>
      </Link>
      <Link href="#" className={style.item}>
        Trang chủ
      </Link>
      <Link href="/about" className={style.item}>
        Giới thiệu
      </Link>
      <Link href="#contact" className={style.item}>
        Liên hệ
      </Link>
    </section>
  )
}

type Props = {
  toggle: boolean
  setToggleFn: (value: boolean) => void
}

const MenuBar = (props: Props) => {
  const closed = 'left-[100vw]'
  const open = 'left-[26vw]'

  const style = {
    wrapper: `fixed lg:hidden ${
      props.toggle ? open : closed
    }  text-white bg-[--nav-color] z-20 h-[100vh] top-0 w-[74vw] pt-[1.4rem] flex flex-col ${
      styles.menuSlide
    }`,
    hotlineItem: `flex text-[1.2rem] font-bold pb-10 mx-auto`,
    hotlineIcon: `mr-1 mt-[0.1rem]`,
    listItem: `pl-[2.7rem]`,
    line: `bg-white h-[2px] my-4`,
  }
  return (
    <div className={style.wrapper}>
      <Link href="tel:0938460990" className={style.hotlineItem}>
        <PhoneInTalkIcon className={style.hotlineIcon} />{' '}
        <span className="mr-1">Hotline:</span>
        <div className={`text-[#FF0000]`}>0938 460 990</div>
      </Link>

      <ul className="text-lg">
        <li className={style.listItem}>
          <Link href="#" onClick={() => props.setToggleFn(false)}>
            Trang chủ
          </Link>
        </li>
        <div className={style.line} />
        <li className={style.listItem}>Sản phẩm</li>
        <div className={style.line} />
        <li className={style.listItem}>
          <Link href="/about" onClick={() => props.setToggleFn(false)}>
            Giới thiệu{' '}
          </Link>
        </li>
        <div className={style.line} />
        <li className={style.listItem}>
          <Link href="#contact" onClick={() => props.setToggleFn(false)}>
            Liên hệ{' '}
          </Link>
        </li>
        <div className={style.line} />
      </ul>

      <Link
        href="https://goo.gl/maps/QXnbeNDqiYS5qsWF9"
        target="_blank"
        className="text-xs text-center pt-4">
        <NearMeIcon />: 416 Phạm Hữu Lầu, Phước Kiển, Nhà Bè, Thành phố Hồ Chí
        Minh, Vietnam.
      </Link>
    </div>
  )
}

const MenuSm = ({ toggle, setToggleFn }: Props) => {
  const handleOnClick = () => {
    setToggleFn(!toggle)
  }
  return (
    <>
      <div
        className="fixed lg:hidden bottom-[2rem] right-[--root-margin] z-40 bg-black/20 rounded-full p-[0.34rem]"
        onClick={handleOnClick}>
        {toggle ? (
          <IoClose className="text-[30px]" />
        ) : (
          <MenuIcon sx={{ fontSize: 30 }} />
        )}
      </div>
      <MenuBar toggle={toggle} setToggleFn={setToggleFn} />
    </>
  )
}

const Menu = (props: Props) => {
  const { width } = useWindowSize()
  const isMobile = (width as number) < 1024
  return (
    <>
      {isMobile ? (
        <MenuSm toggle={props.toggle} setToggleFn={props.setToggleFn} />
      ) : (
        <MenuXl />
      )}
    </>
  )
}

export default Menu

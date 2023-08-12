import { tilt_wrap } from '@/components/assets/fonts'
import Link from 'next/link'
import React from 'react'
import styles from './globalStyles'

const style = {
  title: `${tilt_wrap.className} text-[30px] lg:text-[40px] text-center lg:text-start text-[--primary-color] tracking-[4px] -mb-1 lg:mb-0 hover:scale-[1.04] active:scale-100 ${styles.hover_click}`,
  subtitle: `text-center tracking-[2.4px] text-[--secondary-color] text-[0.6rem] lg:text-sm -mb-4`,
}

const Logo = () => {
  return (
    <Link href="/">
      <h1 className={style.title}>HOÀNG QUANG</h1>
      <p className={style.subtitle}>Cửa Hàng Điện - Nước</p>
    </Link>
  )
}

export default Logo

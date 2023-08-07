import CopyrightIcon from '@mui/icons-material/Copyright'
import React from 'react'

type Props = {}

const style = {
  wrapper: `px-[--root-margin] py-1 lg:py-4`,
  line: `bg-gray-300 h-[1.4px] mt-[2rem] mb-[2px]`,
  content: `flex gap-[4rem]`,
}

const Footer = (props: Props) => {
  return (
    <footer className={style.wrapper}>
      <div className="text-[0.6rem] lg:text-base text-center text-gray-400">
        <CopyrightIcon className="text-[1rem] mb-1" /> Bản quyền thuộc về THIẾT
        BỊ ĐIỆN - NƯỚC HOÀNG QUANG
      </div>
    </footer>
  )
}

export default Footer

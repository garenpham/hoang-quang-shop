import CopyrightIcon from "@mui/icons-material/Copyright";
import React from "react";

type Props = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const style = {
  wrapper: `px-[--root-margin] py-1 lg:py-4`,
  line: `bg-gray-300 h-[1.4px] mt-[2rem] mb-[2px]`,
  content: `flex gap-[4rem]`,
}

const Footer = (props: Props) => {
  return (
    <footer className={style.wrapper} onClick={() => props.setToggle(false)}>
      {/* <div className={style.content}>
        <section id="Thông tin liên hệ">
          <h3>Thông tin liên hệ</h3>
          <h3>Công ty thiết bị Điện Nước Hoàng Quang</h3>
        </section>
        <section id="Ưu đãi">
          <div>Hello</div>
        </section>
      </div>
      <div className={style.line} /> */}
      <div className="text-[0.6rem] lg:text-base text-center text-gray-400">
        <CopyrightIcon className="text-[1rem] mb-1" /> Bản quyền thuộc về THIẾT
        BỊ ĐIỆN - NƯỚC HOÀNG QUANG
      </div>
    </footer>
  )
}

export default Footer;

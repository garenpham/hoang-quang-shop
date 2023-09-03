import styles from "@/components/assets/globalStyles";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Link from "next/link";

const style = {
  wrapper: `hidden xl:flex items-center gap-[1.4rem] text-[1.2rem]`,
  item: `hidden xl:flex gap-2 group`,
  icon: `text-[1.6rem] mb-1`,
}

const Nav = () => {
  return (
    <div className={style.wrapper}>
      <Link href="tel:0938460990" className={style.item}>
        <PhoneInTalkIcon className={style.icon} />{" "}
        <span className="font-bold">Hotline:</span>{" "}
        <div
          className={`text-[#FF0000] font-bold group-hover:scale-105 group-active:scale-100 ${styles.hover_click}`}>
          0938 460 990
        </div>
      </Link>

      <Link
        href="https://goo.gl/maps/QXnbeNDqiYS5qsWF9"
        target="_blank"
        className={`${style.item} group active:scale-95 ${styles.hover_click}`}>
        <NearMeIcon className={`${style.icon} group-hover:opacity-40`} /> Địa
        chỉ
      </Link>
    </div>
  );
};

export default Nav;

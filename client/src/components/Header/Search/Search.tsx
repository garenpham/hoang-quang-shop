import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import styles from '../../assets/globalStyles'

const style = {
  wrapper: `w-full xl:w-auto h-[2rem] xl:h-[3rem] m-auto text-[0.6rem] xl:text-sm flex xl:hover:scale-105 ${styles.hover_click}`,
  inputField: `w-full xl:w-[300px] py-3 pl-4 outline-none rounded-l xl:rounded-l-xl hover:shadow`,
  searchContainer: `my-auto bg-[--primary-color] py-1 px-2 xl:px-2 rounded-r xl:rounded-r-xl`,
}

const Search = () => {
  return (
    <div className={style.wrapper}>
      <input
        id="search"
        type="text"
        placeholder="Nhập tên sản phẩm bạn muốn tìm ..."
        className={style.inputField}
      />
      <div className={style.searchContainer}>
        <SearchIcon
          sx={{
            color: 'white',
            fontSize: 24,
            '@media(min-width:1280px)': { fontSize: 40 },
          }}
        />
      </div>
    </div>
  )
}

export default Search

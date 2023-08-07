import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import styles from '../../assets/globalStyles'

const style = {
  wrapper: `w-full lg:w-auto h-[2rem] lg:h-[3rem] m-auto text-[0.6rem] lg:text-sm flex lg:hover:scale-105 ${styles.hover_click}`,
  inputField: `w-full lg:w-[300px] py-3 pl-4 outline-none rounded-l lg:rounded-l-xl hover:shadow`,
  searchContainer: `my-auto bg-[--primary-color] py-1 px-2 lg:px-2 rounded-r lg:rounded-r-xl`,
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

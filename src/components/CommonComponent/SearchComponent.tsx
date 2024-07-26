import { ISearch } from '../../models'
import styles from "./index.module.css"
import { SearchOutlined } from '@ant-design/icons';


const SearchComponent = ({ placeholder }: ISearch) => {
  return (
    <>
      <div className={styles.searchBox}>
        <input placeholder={placeholder} className={styles.input} />
        <button className={styles.btnSearch}> <SearchOutlined className={styles.icon} /></button>
      </div>
    </>
  )
}

export default SearchComponent
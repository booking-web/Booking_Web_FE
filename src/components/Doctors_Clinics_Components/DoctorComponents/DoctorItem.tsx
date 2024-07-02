import styles from "./index.module.css"


interface IDoctorItem {
  item: any
}

const DoctorItem = ({ item }: IDoctorItem) => {
  return (
    <div className={styles.a}>{item.name}</div>
  )
}

export default DoctorItem
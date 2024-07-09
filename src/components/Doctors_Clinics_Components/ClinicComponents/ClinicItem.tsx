import styles from "./index.module.css"


interface IClinicItem {
  item: any
}

const DoctorItem = ({ item }: IClinicItem) => {
  return (
    <>
      <div className={styles.item}>
        <img className={styles.icon} src={item.image} />
      </div>
      <div className={styles.name}>{item.name}</div>
    </>
  )
}

export default DoctorItem
import styles from "./index.module.css";

interface IClinicItem {
  item: any;
}

const ClinicItem = ({ item }: IClinicItem) => {
  {
    console.log(item);
  }
  return (
    <>
      <div className={styles.item}>
        <img className={styles.icon} src={item?.image} />
      </div>
      <div className={styles.name}>{item?.name}</div>
    </>
  );
};

export default ClinicItem;

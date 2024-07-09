import styles from "./index.module.css"
import { useTranslation } from "react-i18next"
import bg2 from "../../../images/DoctorsPage_images/Item/bg2.svg"
import logo1 from "../../../images/DoctorsPage_images/Item/icon1.svg"
import logo2 from "../../../images/DoctorsPage_images/Item/logo2.svg"
import logo3 from "../../../images/DoctorsPage_images/Item/icon3.svg"

interface IDoctorItem {
  item: any
}

const DoctorItem = ({ item }: IDoctorItem) => {

  const { t } = useTranslation()

  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.itemBg1} ></div>
        <img className={styles.itemBg2} src={bg2} />
        <img className={styles.avatar} src={item.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.infos}>
          <div id={styles.infos} className={styles.info1}>
            <div className={styles.leftContent}>
              <img src={logo1} />
            </div>
            <div className={styles.rightContent}>{item.clinic}</div>
          </div>
          <div id={styles.infos} className={styles.info2}>
            <div className={styles.leftContent}>
              <img src={logo2} />
            </div>
            <div className={styles.rightContent}>{item.place}</div>
          </div>
          <div id={styles.infos} className={styles.info3}>
            <div className={styles.leftContent}>
              <img src={logo3} />
            </div>
            <div className={styles.rightContent}> <span style={{ fontWeight: "bold" }}>{item.exp}</span> {t("exp")}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorItem
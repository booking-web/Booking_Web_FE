import styles from "./index.module.css"
import { useTranslation } from "react-i18next"
import bg2 from "../../../images/DoctorsPage_images/Item/bg2.svg"
import logo1 from "../../../images/DoctorsPage_images/Item/icon1.svg"
import logo2 from "../../../images/DoctorsPage_images/Item/logo2.svg"
import logo3 from "../../../images/DoctorsPage_images/Item/icon3.svg"
import a from "../../../images/test/bs.png"

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
        <img className={styles.avatar} src={a} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}> {t("doctor")}{item.doctorName}</div>
        <div className={styles.infos}>
          <div id={styles.infos} className={styles.info1}>
            <div className={styles.leftContent}>
              <img src={logo1} />
            </div>
            <div className={styles.rightContent}>{item.clinicName}</div>
          </div>
          <div id={styles.infos} className={styles.info2}>
            <div className={styles.leftContent}>
              <img src={logo2} />
            </div>
            <div className={styles.rightContent}>
              {item.workLocation.map((location: any, index: any) => (
                <div key={index}>{location}</div>
              ))}
            </div>
          </div>
          <div id={styles.infos} className={styles.info3}>
            <div className={styles.leftContent}>
              <img src={logo3} />
            </div>
            <div className={styles.rightContent}> <span style={{ fontWeight: "bold" }}>{item.expYear}</span> {t("exp")}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorItem
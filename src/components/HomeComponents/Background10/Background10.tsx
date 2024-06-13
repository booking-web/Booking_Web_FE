
import styles from "./Background10.module.css"
import { useEffect } from 'react'
import { useLanguage } from '../../../contexts/LanguagesContext'
import icon1 from "../../../images/backgrounds/background10/icon1.svg"
import icon2 from "../../../images/backgrounds/background10/icon2.svg"
import img from "../../../images/backgrounds/background10/img.png"
import { useTranslation } from "react-i18next"
import store1vi from "../../../images/backgrounds/background10/store1-vi.svg"
import store2vi from "../../../images/backgrounds/background10/store2-vi.svg"
import store1en from "../../../images/backgrounds/background10/store1-en.svg"
import store2en from "../../../images/backgrounds/background10/store2-en.svg"

const Background10 = () => {

  const { t } = useTranslation()
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    console.log('Current Language:', selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={icon1} className={styles.icon1} />
        <img src={icon2} className={styles.icon2} />
        <img src={img} className={styles.img} />
        <div className={styles.content}>
          <div>{t("bg10.title")}</div>
          <div>{t("download.app.now")}</div>
          {selectedLanguage === "vi" ?
            <div className={styles.stores}>
              <img src={store1vi} />
              <img src={store2vi} />
            </div>
            :
            <div className={styles.stores}>
              <img src={store1en} />
              <img src={store2en} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Background10
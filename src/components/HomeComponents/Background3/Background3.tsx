import styles from "./Background3.module.css"
import { useTranslation } from "react-i18next"


const Background3 = () => {

  const { t } = useTranslation()

  const images = import.meta.glob('../../../images/backgrounds/background3/children/*.{png,jpg,jpeg,svg}', { eager: true });

  return (
    <div className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.content}>
        <h4 className={styles.title}>{t("bg3.title")}</h4>
        <p className={styles.text}>{t("bg3.text")}</p>
        <div className={styles.images}>
          {Object.entries(images).map(([_, module]: any, index) => (
            <div className={styles.img}>
              <img key={index} src={module.default} alt={`image-${index}`} className={styles.a} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Background3
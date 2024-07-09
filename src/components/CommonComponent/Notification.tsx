import { BellOutlined } from '@ant-design/icons'
import styles from "./index.module.css"
import no_notification from "../../images/navbar_images/no_notification.webp"
import { useTranslation } from 'react-i18next'

const Notification = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.notification}>
      <BellOutlined className={styles.bell} />
      <span className={styles.none}>
        <div className={styles.item}>
          <img src={no_notification} className={styles.noNotification} />
          {t("no.notification")}
        </div>
      </span>
    </div>
  )
}

export default Notification
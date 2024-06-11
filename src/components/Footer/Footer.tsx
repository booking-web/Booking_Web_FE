import styles from "./Footer.module.css"
import logo from "../../images/footer/logo.svg"
import logo2 from "../../images/footer/logo2.png"
import { useTranslation } from "react-i18next"
import { Divider } from "antd"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={logo} />
        <div className={styles.row}>
          <div className={styles.row1} id={styles.row}>
            <div className={styles.text}><strong>Hotline</strong> 1900xxxxxx</div>
            <div className={styles.text}><strong>{t("support")}</strong> support@jiohealth.com</div>
            <div className={styles.text}>Copyright © 2017-2024 Rai and Rohl Technologies, Inc. All rights reserved.</div>
          </div>
          <div className={styles.row2} id={styles.row}>
            <div><strong>{t("service")}</strong></div>
            <div className={styles.text}>{t("bg4.title")}</div>
            <div className={styles.text}>{t("jio.pharmacy")}</div>
          </div>
          <div className={styles.row3} id={styles.row}>
            <div><strong>{t("learn.more")}</strong></div>
            <div className={styles.text}>{t("doctors")}</div>
            <div className={styles.text}>{t("care.service")}</div>
            <div className={styles.text}>{t("for.press")}</div>
            <div className={styles.text}>{t("recruitment")}</div>
          </div>
          <div className={styles.row4} id={styles.row}>
            <div><strong>{t("customer.support")}</strong></div>
            <div className={styles.text}>{t("faq")}</div>
            <div className={styles.text}>{t("confidentiality.policies")}</div>
            <div className={styles.text}>{t("contact")}</div>
          </div>
        </div>
        <Divider style={{ border: "1px solid #cecece" }} />
        <div className={styles.row}>
          <div className={styles.row1} id={styles.row}>
            <div><strong>{t("company")}</strong></div>
            <div><strong>{t("license.title")}</strong> {t("license.content")} </div>
          </div>
          <div className={styles.row4} id={styles.row}>
            <div><strong>{t("address")}</strong></div>
            <div className={styles.text}>{t("jio.smart.clinic")}</div>
            <div>{t("building1")}</div>
          </div>
          <div className={styles.row4} id={styles.row}>
            <img src={logo2} style={{ width: "160px" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
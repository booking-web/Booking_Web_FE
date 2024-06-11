import React from "react";
import logo_header from "../../images/navbar_images/logo_header.svg";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import vi from "../../images/navbar_images/vi.png";
import en from "../../images/navbar_images/en.png";
import { useLanguage } from "../../contexts/LanguagesContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { selectedLanguage, changeLanguage } = useLanguage();

  return (
    <div className={styles.containerParent} >
      <a href="/">
        <img src={logo_header} alt='' />
      </a>
      <div className={styles.containerChildren}>
        <a href=''>{t("home")}</a>
        <a href=''>{t("care.service")}</a>
        <a href=''>{t("jio.pharmacy")}</a>
        <a href=''>{t("health.plan")}</a>
        <a href=''>{t("doctors")}</a>
        <a href=''>{t("news")}</a>
        <div className={styles.translates}>
          <div onClick={() => changeLanguage('vi')}
            className={styles.translate}
            style={{ backgroundColor: selectedLanguage === 'vi' ? 'rgb(202 255 255)' : 'transparent', padding: '10px', cursor: 'pointer' }}
          >
            <img src={vi} />
            <span>VN</span>
          </div>
          <div onClick={() => changeLanguage('en')}
            className={styles.translate}
            style={{ backgroundColor: selectedLanguage === 'en' ? 'rgb(202 255 255)' : 'transparent', padding: '10px', cursor: 'pointer' }}
          >
            <span>EN</span>
            <img src={en} />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.leftButton}>{t("make.an.appointment.now")}</button>
          <button className={styles.rightButton}>{t("download.app.now")}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

import logo_header from "../../images/navbar_images/logo_header.svg";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import vi from "../../images/navbar_images/vi.png";
import en from "../../images/navbar_images/en.png";
import { useLanguage } from "../../contexts/LanguagesContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.containerParent} ${isFixed ? styles.fixed : ''}`}>
      <Link to="/">
        <img src={logo_header} alt='' />
      </Link>
      <div className={styles.containerChildren}>
        <Link className={styles.a} to='/'>{t("home")}</Link>
        <Link className={styles.a} to=''>{t("care.service")}</Link>
        <Link className={styles.a} to='https://pharmacy.jiohealth.com/'>{t("jio.pharmacy")}</Link>
        <Link className={styles.a} to='/clinics'>{t("clinics")}</Link>
        <Link className={styles.a} to='/doctors'>{t("doctors")}</Link>
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
          <Link to="/login">
            <button className={styles.rightButton}>{t("login.now")}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

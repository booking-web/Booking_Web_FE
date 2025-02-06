import logo_header from "../../images/navbar_images/logo_header.svg";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import vi from "../../images/navbar_images/vi.png";
import en from "../../images/navbar_images/en.png";
import { useLanguage } from "../../contexts/LanguagesContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Notification from "../CommonComponent/Notification";
import { Avatar, Dropdown } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useModalContext } from "../../contexts/ModalContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isFixed, setIsFixed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setModalState } = useModalContext();
  const navigate = useNavigate()

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

  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('email');
    const storedToken = localStorage.getItem('access_token') && localStorage.getItem("refresh_token");

    if (storedUserId && storedToken) {
      setUserId(storedUserId);
      setToken(storedToken);
      setIsLoggedIn(true)
    } else {
      console.error('No userId or token found in localStorage');
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
  }
  const menu = [
    {
      key: 2,
      icon: <UserOutlined />,
      label: t("profile"),
      onClick: () => navigate(`/user-profile?userId=${userId}`)
    },
    {
      key: 3,
      icon: <LogoutOutlined />,
      label: t("logout"),
      onClick: (handleLogout)
    }
  ]

  return (
    <div className={`${styles.containerParent} ${isFixed ? styles.fixed : ''}`}>
      <Link to="/">
        <img src={logo_header} alt='' />
      </Link>
      <div className={styles.containerChildren}>
        <Link className={styles.link} to='/'>{t("home")}</Link>
        <Link className={styles.link} to=''>{t("care.service")}</Link>
        <Link className={styles.link} to='https://pharmacy.jiohealth.com/'>{t("jio.pharmacy")}</Link>
        <Link className={styles.link} to='/clinics'>{t("clinics")}</Link>
        <Link className={styles.link} to='/doctors'>{t("doctors")}</Link>
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
        <Notification />
        <div className={styles.buttons}>
          <button className={styles.leftButton}>{t("make.an.appointment.now")}</button>
          {isLoggedIn ? (
            <Dropdown menu={{ items: menu }} trigger={['click']}>
              <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
            </Dropdown>
          ) : (
            <Link to="/auth-page">
              <button onClick={() => setModalState("login")} className={styles.rightButton}>{t("login.now")}</button>
            </Link>
          )}
        </div>
      </div>
    </div >
  )
}

export default Navbar;

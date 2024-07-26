import React from 'react';
import { useModalContext } from "../../contexts/ModalContext";
import styles from "./index.module.css"
import LoginForm from '../Auth/LoginForm';
import RegisterForm from "../Auth/RegisterForm"
import ForgotPasswordForm from '../Auth/ForgotPasswordForm';
import { useTranslation } from 'react-i18next';
import ChangePasswordForm from '../Auth/ChangePasswordForm';

const Modal: React.FC = () => {
  const { modalState, setModalState } = useModalContext();
  const { t } = useTranslation()

  const renderContent = () => {
    switch (modalState) {
      case 'login':
        return { title: t("login"), content: <LoginForm /> };
      case 'register':
        return { title: t("register"), content: <RegisterForm /> };
      case 'forgotPassword':
        return { title: t("forgot.password"), content: <ForgotPasswordForm /> };
      case 'changePassword':
        return { title: t("change.password"), content: <ChangePasswordForm /> };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = renderContent();

  return (
    <div className={styles.modal}>
      <h1>{title}</h1>
      {content}
      <div className={styles.actions}>
        {modalState !== 'changePassword' && (
          <>
            {modalState !== 'login' && (
              <span className={styles.action} onClick={() => setModalState('login')}>{t("login")}</span>
            )}
            {modalState !== 'register' && (
              <span className={styles.action} onClick={() => setModalState('register')}>{t("register")}</span>
            )}
            {modalState !== 'forgotPassword' && (
              <span className={styles.action} onClick={() => setModalState('forgotPassword')}>{t("forgot.password")}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

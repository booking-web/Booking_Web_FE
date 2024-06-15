import React, { useState } from 'react'
import styles from "./Auth.module.css"
import { useTranslation } from 'react-i18next'
import { Input, Form, Button } from 'antd/es/'
import ModalOTP from '../ModalOTP/ModalOTP'

type ForgotPassword = {
  email: string
}

const ForgotPasswordForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <Form.Item<ForgotPassword>
          label="Email"
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <div className={styles.btn}>
        <Button onClick={showModal}>{t("sendOTP")}</Button>
        <ModalOTP open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
      </div>
    </div>
  )
}

export default ForgotPasswordForm
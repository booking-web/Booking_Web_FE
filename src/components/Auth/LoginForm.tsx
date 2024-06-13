import React from 'react'
import styles from "./Auth.module.css"
import { useTranslation } from 'react-i18next'
import { Input, Form, Button } from 'antd/es/'

type Login = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <Form.Item<Login>
          label="Email"
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Login>
          label={t("password")}
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input.Password />
        </Form.Item>

        <div className={styles.btn}>
          <Button>{t("login")}</Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
import React from 'react'
import { Input, Form, Button } from 'antd/es/'
import styles from "./Auth.module.css"
import { useTranslation } from 'react-i18next'

type Register = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  address: string
}

const RegisterForm = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>

      <Form className={styles.formFlex}>
        <Form.Item<Register>
          label={t("first.name")}
          name="firstName"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Register>
          label={t("last.name")}
          name="lastName"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

      </Form>

      <Form className={styles.form}>
        <Form.Item<Register>
          label="Email"
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Register>
          label={t("password")}
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<Register>
          label={t("confirm.password")}
          name="confirmPassword"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<Register>
          label={t("address")}
          name="address"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <div className={styles.btn}>
          <Button>{t("register")}</Button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
import { Input, Form, Button, Row, Col } from 'antd/es/';
import styles from "./Auth.module.css";
import { useTranslation } from 'react-i18next';
import { register } from '../../Services/user';
import { toast } from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IRegister } from '../../models/user';
import { useModalContext } from '../../contexts/ModalContext';

type Register = {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
  address: string
}

const RegisterForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { setModalState } = useModalContext();
  const registerMutate = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success(t("register.successfully"));
      setModalState("login");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = async (data: IRegister) => {
    registerMutate.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        form={form}
        onFinish={onSubmit}
      >

        <Form.Item<Register>
          label={t("full.name")}
          name="fullName"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Register>
          label="Email"
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Register>
          label={t("password")}
          name="password"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<Register>
          label={t("confirm.password")}
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: t("required.mess") },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("confirm.password.is.incorrect")));
              },
            }),
          ]}
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
          <Button type='primary' htmlType='submit'>{t("register")}</Button>
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;

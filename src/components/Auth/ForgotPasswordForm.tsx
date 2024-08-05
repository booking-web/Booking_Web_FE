import styles from "./Auth.module.css";
import { useTranslation } from 'react-i18next';
import { Input, Form, Button } from 'antd/es/';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '../../Services/user';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

type ForgotPassword = {
  email: string;
};

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.success(t("confirm.email.successfully"));
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = (values: ForgotPassword) => {
    forgotPasswordMutation.mutate(values.email);
    console.log(values.email);
    localStorage.setItem("email", values.email)

  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item<ForgotPassword>
          label={t("Email")}
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>
        <div className={styles.btn}>
          <Button type='primary' htmlType='submit'>{t("send")}</Button>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;

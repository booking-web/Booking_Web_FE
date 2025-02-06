import styles from "./Auth.module.css";
import { useTranslation } from "react-i18next";
import { Input, Form, Button } from "antd/es/";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../Services/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ILogin } from "../../models/user";

type Login = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res: { access_token: string; refresh_token: string; email: string; roleId: string }) => {
      console.log(res);
      localStorage.setItem("access_token", res?.access_token);
      localStorage.setItem("refresh_token", res?.refresh_token);
      localStorage.setItem("email", res?.email);
      if (res?.roleId === "3") {
        navigate("/admin");
      } else if (res?.roleId === "2") {
        navigate("/abc");
      } else {
        navigate("/");
      }
      toast.success(t("login.successfully"));
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = async (data: ILogin) => {
    localStorage.getItem(data.email || ``);
    localStorage.getItem(data.password || ``);
    loginMutation.mutate(data);
  };

  return (
    <div className={styles.container}>
      <Form className={styles.form} onFinish={onSubmit}>
        <Form.Item<Login> label="Email" name="email" rules={[{ required: true, message: t("required.mess") }]}>
          <Input />
        </Form.Item>

        <Form.Item<Login> label={t("password")} name="password" rules={[{ required: true, message: t("required.mess") }]}>
          <Input.Password />
        </Form.Item>

        <div className={styles.btn}>
          <Button type="primary" htmlType="submit">
            {t("login")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;

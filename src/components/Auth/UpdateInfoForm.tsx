import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";
import styles from "./Auth.module.css";
import { updateUser } from "../../Services/user";
import { IUpdateUser } from "../../models/user";
import { useNavigate } from "react-router-dom";

type UpdateInfo = {
  email?: string;
  fullName?: string;
};

const UpdateInfoForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const UpdateInfoMutate = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success(t("update.info.user.successfully"));
      navigate(-1);
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = async (data: IUpdateUser) => {
    console.log(data);
    UpdateInfoMutate.mutate(data);
  };

  return (
    <div className={styles.container}>
      <Form className={styles.form} form={form} onFinish={onSubmit}>
        <Form.Item<UpdateInfo>
          label={t("Email")}
          name="email"
          rules={[{ required: true, message: t("required.mess") }]}>
          <Input />
        </Form.Item>

        <Form.Item<UpdateInfo>
          label={t("full.name")}
          name="fullName"
          rules={[{ required: true, message: t("required.mess") }]}>
          <Input />
        </Form.Item>

        <div className={styles.btn}>
          <Button type="primary" htmlType="submit">
            {t("confirm")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateInfoForm;

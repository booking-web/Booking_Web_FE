import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import React from 'react'
import { changePassword } from '../../Services/user';
import toast from 'react-hot-toast';
import { useModalContext } from '../../contexts/ModalContext';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import styles from "./Auth.module.css"
import { IChangePassword } from '../../models/user';
import httpClient from '../../client/httpClient';

type ChangePassword = {
  newPassword: string,
  confirmNewPassword: string
}

const ChangePasswordForm = () => {

  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { setModalState } = useModalContext();

  const changePasswordMutate = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      toast.success(t("change.password.successfully"));
      setModalState("login");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = async (data: IChangePassword) => {
    if (data.newPassword !== data.confirmNewPassword) {
      toast.error(t("confirm.password.not.match"));
    }
    changePasswordMutate.mutate(data);
  }

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item<ChangePassword>
          label={t("new.password")}
          name="newPassword"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ChangePassword>
          label={t("confirm.new.password")}
          name="confirmNewPassword"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input />
        </Form.Item>

        <div className={styles.btn}>
          <Button type='primary' htmlType='submit'>{t("send")}</Button>
        </div>
      </Form>
    </div>
  )
}

export default ChangePasswordForm
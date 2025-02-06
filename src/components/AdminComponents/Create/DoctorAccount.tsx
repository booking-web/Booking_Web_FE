import AdminTitle from "../../CommonComponent/ContentComponents/AdminTitle";
import { useTranslation } from "react-i18next";
import { Input, Form, Button, Row, Col, Upload } from "antd/es/";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { createDoctorAccount } from "../../../Services/admin";
import { ICreateDoctorAccount } from "../../../models/admin";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/es/upload";

type DoctorAccount = {
  doctorName: string;
  doctorSum: string;
  expYear: number;
  specialty: string;
  trainingInstitution: string;
  language: string;
  image: string;
  description: string;
  email: string;
  password: string;
};

const DoctorAccount = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<File | null>(null);

  const registerMutate = useMutation({
    mutationFn: createDoctorAccount,
    onSuccess: (data: any) => {
      if (data?.EC === 1) {
        toast.error(t("user.already.exists"));
      } else {
        toast.success(t("create.successfully"));
        form.resetFields();
        setImageUrl(undefined);
        setFile(null);
      }
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const handleChange = ({ file: uploadFile }: any) => {
    if (uploadFile.status === "done" || uploadFile.status === "uploading") {
      setFile(uploadFile.originFileObj as File);
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(uploadFile.originFileObj as File);
    }
  };

  const onSubmit = async (data: ICreateDoctorAccount) => {
    console.log(data);

    registerMutate.mutate(data);
  };

  const uploadButton = (
    <button style={{ border: "1px solid #dbdbdb", background: "none", width: "100%", height: "100%", color: "black" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  console.log(imageUrl);

  return (
    <div>
      <AdminTitle title={t("create") + " " + t("doctor.account")} />
      <Form form={form} layout="vertical" onFinish={onSubmit} initialValues={{ password: "123" }}>
        <Form.Item<DoctorAccount> name="image">
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <Upload action="/api/v1/doctors" listType="picture-circle" showUploadList={false} onChange={handleChange}>
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "50%" }} /> : uploadButton}
            </Upload>
          </div>
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("Email")} name="email" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("password")} name="password" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("full.name")} name="doctorName" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("doctor.summary")} name="doctorSum" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("exp")} name="expYear" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("specialty")} name="specialty" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("languages")} name="language" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<DoctorAccount> label={t("training.institution")} name="trainingInstitution" rules={[{ required: true, message: t("required.mess") }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item<DoctorAccount> label={t("description")} name="description" rules={[{ required: true, message: t("required.mess") }]}>
          <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {t("create")}
        </Button>
      </Form>
    </div>
  );
};

export default DoctorAccount;

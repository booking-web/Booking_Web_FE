import { Button, Col, Form, Input, Row } from "antd"
import AdminTitle from "../../CommonComponent/ContentComponents/AdminTitle"
import { useTranslation } from "react-i18next"

type SpecialtyInformation = {
  clinicName: string,
  img: string,
  description: string
}

const SpecialtyInformation = () => {

  const { t } = useTranslation()
  const [form] = Form.useForm();

  return (
    <div>
      <AdminTitle title={t("create") + " " + t("clinics")} />
      <Form form={form} layout='vertical'>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item<SpecialtyInformation>
              label={t("clinic")}
              name="clinicName"
              rules={[{ required: true, message: t("required.mess") }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<SpecialtyInformation>
              label={t("img")}
              name="img"
              rules={[{ required: true, message: t("required.mess") }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item<SpecialtyInformation>
          label={t("description")}
          name="description"
          rules={[{ required: true, message: t("required.mess") }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Button type="primary" htmlType="submit">{t("create")}</Button>
      </Form>
    </div>
  )
}

export default SpecialtyInformation
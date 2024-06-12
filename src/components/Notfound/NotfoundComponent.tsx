import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFoundComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation()
  return (
    <Result
      status="404"
      title="404"
      subTitle={t("error.page")}
      extra={
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          {t("back")}
        </Button>
      }
    />
  );
}

export default NotFoundComponent;

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function NotFoundComponent() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      // subTitle={<Text id="feature.not.found" />}
      extra={
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          {/* <Text id="back" /> */}
        </Button>
      }
    />
  );
}

export default NotFoundComponent;

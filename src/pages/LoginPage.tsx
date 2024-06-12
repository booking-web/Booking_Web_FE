import { LogoutOutlined } from "@ant-design/icons"
import Background1 from "../components/CommonComponent/Background1"
import ModalCustom from "../components/CommonComponent/Modal"
import styles from "./Pages.module.css"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className="" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <LogoutOutlined className={styles.icon} onClick={() => navigate(-1)} />
      <Background1 children={<ModalCustom />}>
      </Background1>

    </div>
  )
}

export default LoginPage
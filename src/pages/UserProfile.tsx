import UserDetail from "../components/Details/User/UserDetail"
import styles from "./Pages.module.css"
import { useTranslation } from "react-i18next"
import Title from "../components/CommonComponent/ContentComponents/Title"
import { LogoutOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={styles.UserProfilePageContainer}>
      <LogoutOutlined className={styles.icon} onClick={() => navigate(-1)} />
      <Title title={t("user's.information")}></Title>
      <UserDetail />
    </div>
  )
}

export default UserProfile
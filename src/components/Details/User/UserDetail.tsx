import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { getUserProfile } from "../../../Services/user"
import styles from "./UserDetail.module.css"
import { useTranslation } from "react-i18next"
import avatar from "../../../images/test/avatar.jpg"
import { useModalContext } from "../../../contexts/ModalContext"

const UserDetail = () => {

  const { t } = useTranslation()
  const [searchParams] = useSearchParams();
  const id = searchParams.get('userId');
  const { setModalState } = useModalContext();

  const handleClick = () => {
    setModalState("changePassword")
  }

  const { data } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfile(id),
    enabled: !!id
  })

  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.img} />
      <div className={styles.info}>
        <h2>{t("full.name")}: {data?.fullName}</h2>
        <h2>{t("Email")}: {data?.email}</h2>
        <h2>{t("address")}: {data?.address}</h2>
        <h2>{t("change.password")}: <Link to="/auth-page" onClick={handleClick} className={styles.link}>{t("click.here")}</Link></h2>
      </div>
    </div>
  )
}

export default UserDetail
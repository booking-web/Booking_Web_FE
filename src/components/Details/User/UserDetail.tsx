import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate, useSearchParams } from "react-router-dom"
import { deleteAccount, getUserProfile } from "../../../Services/user"
import styles from "./UserDetail.module.css"
import { useTranslation } from "react-i18next"
import { useModalContext } from "../../../contexts/ModalContext"
import UploadAvatar from "../UploadAvatar/UploadAvatar"
import { Button, Modal } from "antd"
import { DeleteOutlined, FormOutlined, InfoCircleOutlined } from "@ant-design/icons"
import toast from "react-hot-toast"
import { AxiosError } from "axios"

const UserDetail = () => {

  const { t } = useTranslation()
  const [searchParams] = useSearchParams();
  const id = searchParams.get('userId');
  const { setModalState } = useModalContext();
  const navigate = useNavigate()

  const handleClickChangePassword = () => {
    navigate("/auth-page")
    setModalState("changePassword")
  }

  const handleClickUpdateInfo = () => {
    // navigate("/auth-page")
    // setModalState("register")
  }

  const deleteMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success(t("delete.account.successfully"));
      setModalState("login");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  })

  const handleDelete = () => {
    Modal.confirm({
      title: t("warning"),
      content: t("do.you.want.to.delete.your.account"),
      okText: t("OK"), // Nút OK
      cancelText: t("Cancel"), // Nút Cancel
      onOk: () => {
        console.log(id);
        deleteMutation.mutate(id)
        navigate('/')
      },
    });
  };

  const { data } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => getUserProfile(id),
    enabled: !!id
  })

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <UploadAvatar />
      </div>
      <div className={styles.right}>
        <h2>{t("full.name")}: {data?.fullName}</h2>
        <h2>{t("Email")}: {data?.email}</h2>
        <h2>{t("address")}: {data?.address}</h2>
        <div className={styles.btns}>
          <Button
            icon={<InfoCircleOutlined />}
            onClick={handleClickUpdateInfo}
            type="primary"
            className={styles.btnInfo}
            id={styles.btn}>
            {t("update.info")}
          </Button>
          <Button
            icon={<FormOutlined />}
            onClick={handleClickChangePassword}
            type="primary"
            id={styles.btn}>
            {t("change.password")}
          </Button>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={handleDelete}
            id={styles.btn}>
            {t("delete.account")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
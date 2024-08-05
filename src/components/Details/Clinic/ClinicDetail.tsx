import styles from "./ClinicDetail.module.css"
import { useTranslation } from "react-i18next"
import test from "../../../images/test/blood-drop.svg"
import test1 from "../../../images/test/croup.svg"

const ClinicDetail = () => {

  const { t } = useTranslation()

  const items = [
    {
      icon: test1,
      name: "Cảm cúm",
    },
    {
      icon: test1,
      name: "Đau chân",
    },
    {
      icon: test1,
      name: "Đau đầu",
    },
    {
      icon: test1,
      name: "Cảm cúm",
    },
    {
      icon: test1,
      name: "Đau chân",
    },
    {
      icon: test1,
      name: "Đau đầu",
    },
    {
      icon: test1,
      name: "Cảm cúm",
    },
    {
      icon: test1,
      name: "Đau chân",
    },
    {
      icon: test1,
      name: "Đau đầu",
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bg1} id={styles.bg}></div>
        <div id={styles.contents} className={styles.content}>
          <h2 className={styles.title}>{t("clinic")}</h2>
          <div className={styles.text}>{t("clinic.detail.content")}</div>
        </div>
      </div>
      <div className={styles.infos}>
        <div className={styles.bg3} id={styles.bg}></div>
        <div className={styles.bg4} id={styles.bg}></div>
        <div className={styles.bg6} id={styles.bg}></div>
        <div className={styles.bg5} id={styles.bg}></div>
        <div className={styles.info}>
          <div className={styles.heading}>
            <img src={test} className={styles.logo} />
            <img src={test} className={styles.logo} />
            <h2 className={styles.name}>Nhi Khoa</h2>
            <img src={test} className={styles.logo} />
            <img src={test} className={styles.logo} />
          </div>
          <div className={styles.desc}>Vaccine là chế phẩm có chứa kháng nguyên - tác nhân mang tính chất tương tự với vi sinh vật gây bệnh được tạo từ thể suy yếu hoặc đã bị chết của vi khuẩn; chất độc của chúng hoặc các protein bề mặt. Tác nhân này kích thích cho hệ miễn dịch của cơ thể nhận diện và tiêu diệt mầm bệnh, đồng thời ghi nhớ và chống lại tác nhân tương tự về sau.</div>
          <div className={styles.heading}>
            <h2 className={styles.name}>{t("the.symptoms")}</h2>
          </div>
        </div>
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item}>
              <div className={styles.icons}>
                <img src={item.icon} className={styles.icon} />
              </div>
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClinicDetail
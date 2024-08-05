import styles from "./DoctorDetail.module.css"
import bg from "../../../images/backgrounds/doctor-detail/bg.svg"
import Title from "../../CommonComponent/ContentComponents/Title"
import { useTranslation } from "react-i18next"
import icon1 from "../../../images/backgrounds/doctor-detail/icon1.svg"
import icon2 from "../../../images/backgrounds/doctor-detail/icon2.svg"
import icon3 from "../../../images/backgrounds/doctor-detail/icon3.svg"
import icon4 from "../../../images/backgrounds/doctor-detail/icon4.svg"
import icon5 from "../../../images/backgrounds/doctor-detail/icon5.svg"
import separate1 from "../../../images/backgrounds/doctor-detail/separate1.svg"
import separate2 from "../../../images/backgrounds/doctor-detail/separate2.svg"
import separate3 from "../../../images/backgrounds/doctor-detail/separate3.svg"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import test from "../../../images/test/bs.png"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { getDetailDoctor } from "../../../Services/doctor"


const DoctorDetail = () => {

  const { t } = useTranslation()
  const [searchParams] = useSearchParams();
  const id = searchParams.get('doctorId');

  const { data } = useQuery({
    queryKey: ['detailDoctor'],
    queryFn: () => getDetailDoctor(id),
    enabled: !!id
  })

  const items = [
    {
      img: <img src={icon1} />,
      title: t("clinic"),
      content: ""
    },
    {
      img: <img src={icon2} />,
      title: t("training"),
      content: "a"
    },
    {
      img: <img src={icon3} />,
      title: t("degrees"),
      content: t("doctor.of.medicine"),
    },
    {
      img: <img src={icon4} />,
      title: t("languages"),
      content: t("en/vi")
    },
    {
      img: <img src={icon5} />,
      title: t("location"),
      content: t("saigon")
    },
  ]


  return (
    <div>
      <div className={styles.container}>
        <div>
          <img src={bg} className={styles.background} />
        </div>
        <div className={styles.contents}>
          <div className={styles.leftContent}>
            <Title title={t("doctor") + "Đặng Hoàng Thức"} />
            <div className={styles.description}>
              TS.BS Nguyễn Văn Sĩ có 15 năm kinh nghiệm khám chữa bệnh trong lĩnh vực Nội tổng quát và Nội tim mạch tại các bệnh viện lớn trong thành phố Hồ Chí Minh. BS Sĩ tốt nghiệp Tiến sĩ y khoa tại Đại học Yamanashi danh tiếng danh tiếng của Nhật Bản
            </div>
            <div className={styles.btns}>
              <button id={styles.btn} className={styles.btn1}>{t("book.clinic.visit")}</button>
              <button id={styles.btn} className={styles.btn2}>{t("book.home.visit")}</button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <img src={test} className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.informationBlock}>
        <div className={styles.wave} id={styles.bg}></div>
        <div className={styles.pink} id={styles.bg}></div>
        <div className={styles.contents}>
          <div className={styles.list}>
            {items.map((item) => (
              <div className={styles.items}>
                <div className={styles.icons}>
                  <div className={styles.icon}>{item.img}</div>
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className="">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.separates}>
        <img src={separate1} className={styles.separate} />
        <img src={separate2} className={styles.separate} />
      </div>
      <div className={styles.desc}>
        <div className={styles.contents}>
          <div>
            <h3 className={styles.heading}>{t("education.and.experiences")}</h3>
            <Separator />
            <div className={styles.info}>TS.BS Nguyễn Văn Sĩ có 15 năm kinh nghiệm khám chữa bệnh trong lĩnh vực Nội tổng quát và Nội tim mạch tại các bệnh viện lớn trong thành phố Hồ Chí Minh. BS Sĩ tốt nghiệp Tiến sĩ y khoa tại Đại học Yamanashi danh tiếng của Nhật Bản và có nhiều công trình nghiên cứu y học công bố trên các tạp chí khoa học uy tín trong và ngoài nước. Hiện tại BS Sĩ là Giảng viên Bộ môn Nội tổng quát, Đại học Y Dược Thành phố Hồ Chí Minh và là cố vấn Nội khoa tại Jio Health.</div>
          </div>
        </div>
      </div>
      <div className={styles.separate3}>
        <img src={separate3} className={styles.separate} />
      </div>
    </div>

  )
}

export default DoctorDetail
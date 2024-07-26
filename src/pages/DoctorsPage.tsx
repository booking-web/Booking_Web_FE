import { useTranslation } from 'react-i18next'
import styles from "./Pages.module.css"
import HeaderCovid from '../components/HeaderCovid/HeaderCovid'
import Navbar from '../components/Navbar/Navbar'
import DoctorBanner from '../components/Doctors_Clinics_Components/DoctorComponents/DoctorBanner'
import BackgroundTop from '../components/Doctors_Clinics_Components/BackgroundTop'
import Title from '../components/CommonComponent/ContentComponents/Title'
import SearchComponent from '../components/CommonComponent/SearchComponent'
import SelectClinic from '../components/Doctors_Clinics_Components/SelectClinic'
import List from '../components/Doctors_Clinics_Components/List'
import DoctorItem from '../components/Doctors_Clinics_Components/DoctorComponents/DoctorItem'
import a from "../images/test/bs.png"

const doctorData = [
  { image: a, name: 'Doctor A', clinic: "Khoa nhi", place: "Bệnh viện Lê Văn Thịnh", exp: 15 },
  { image: a, name: 'Doctor B', clinic: "Khoa nhi", place: "Bệnh viện Lê Văn Thịnh", exp: 15 },
  { image: a, name: 'Doctor C', clinic: "Khoa nhi", place: "Bệnh viện Lê Văn Thịnh", exp: 15 },
  { image: a, name: 'Doctor D', clinic: "Khoa nhi", place: "Bệnh viện Lê Văn Thịnh", exp: 15 },
  { image: a, name: 'Doctor E', clinic: "Khoa nhi", place: "Bệnh viện Lê Văn Thịnh", exp: 15 },
  { image: a, name: '', clinic: "", place: "", exp: "" },

  { image: a, name: 'Doctor A' },
  { image: a, name: 'Doctor B' },
  { image: a, name: 'Doctor C' },
  { image: a, name: 'Doctor D' },
  { image: a, name: 'Doctor E' },
  { image: a, name: 'Doctor F' },

];

const DoctorsPage = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.DoctorPageContainer}>
      <HeaderCovid />
      <Navbar />
      <DoctorBanner />
      <div style={{ position: "relative" }}>
        <BackgroundTop />
        <div className={styles.container}>
          <Title title={t("find.your.doctor")} />
          <div className={styles.find}>
            <SearchComponent placeholder={t("find.your.doctor")} className="" />
            <SelectClinic />
          </div>
          <List data={doctorData} renderType="doctor" renderItem={(item) => <DoctorItem item={item} />} />
        </div>
      </div>
    </div>
  )
}

export default DoctorsPage
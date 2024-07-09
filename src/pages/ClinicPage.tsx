import { useTranslation } from 'react-i18next'
import styles from "./Pages.module.css"
import HeaderCovid from "../components/HeaderCovid/HeaderCovid"
import Navbar from "../components/Navbar/Navbar"
import ClinicBanner from "../components/Doctors_Clinics_Components/ClinicComponents/ClinicBanner"
import Title from '../components/CommonComponent/ContentComponents/Title'
import BackgroundTop from '../components/Doctors_Clinics_Components/BackgroundTop'
import SearchComponent from '../components/CommonComponent/SearchComponent'
import SelectClinic from '../components/Doctors_Clinics_Components/SelectClinic'
import List from '../components/Doctors_Clinics_Components/List'
import ClinicItem from '../components/Doctors_Clinics_Components/ClinicComponents/ClinicItem'
import a from "../images/test/blood-drop.svg"

const clinicData = [
  { image: a, name: 'Nhi khoa' },
  { image: a, name: 'Xương khớp' },
  { image: a, name: 'Tim mạch' },
  { image: a, name: 'Nhi khoa' },
  { image: a, name: 'Xương khớp' },
  { image: "", name: '' },
]

const ClinicPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div style={{ backgroundColor: " #f2f3ff" }}>
        <HeaderCovid />
        <Navbar />
        <ClinicBanner />
        <div style={{ position: "relative" }}>
          <BackgroundTop />
          <div className={styles.container}>
            <Title title={t("find.clinic.or.your.disease.symptoms")} />
            <div className={styles.find}>
              <SearchComponent placeholder={t("find.clinic.or.your.disease.symptoms")} className="" />
              <SelectClinic />
            </div>
            <List data={clinicData} renderType="clinic" renderItem={(item) => <ClinicItem item={item} />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ClinicPage
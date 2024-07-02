import { useTranslation } from 'react-i18next'
import styles from "./Pages.module.css"
import HeaderCovid from "../components/HeaderCovid/HeaderCovid"
import Navbar from "../components/Navbar/Navbar"
import ClinicBanner from "../components/Doctors_Clinics_Components/ClinicComponents/ClinicBanner"
import Title from '../components/CommonComponent/ContentComponents/Title'

const ClinicPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <div style={{ backgroundColor: " #f2f3ff" }}>
        <HeaderCovid />
        <Navbar />
        <ClinicBanner />
        <div className={styles.container}>
          <Title title={t("find.clinic.or.your.disease.symptoms")} />
        </div>
      </div>
    </>
  )
}

export default ClinicPage
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

const doctorData = [
  { name: 'Doctor A' },
  { name: 'Doctor B' },
  { name: 'Doctor C' },
  { name: 'Doctor D' },
  { name: 'Doctor E' },
  { name: 'Doctor F' },

  { name: 'Doctor A' },
  { name: 'Doctor B' },
  { name: 'Doctor C' },
  { name: 'Doctor D' },
  { name: 'Doctor E' },
  { name: 'Doctor F' },

  { name: 'Doctor A' },
  { name: 'Doctor B' },
  { name: 'Doctor C' },
  { name: 'Doctor D' },
  { name: 'Doctor E' },
  { name: 'Doctor F' },

  { name: 'Doctor A' },
  { name: 'Doctor B' },
  { name: 'Doctor C' },
  { name: 'Doctor D' },
  { name: 'Doctor E' },
  { name: 'Doctor F' },

  { name: 'Doctor A' },
  { name: 'Doctor B' },
  { name: 'Doctor C' },
  { name: 'Doctor D' },
  { name: 'Doctor E' },
  { name: 'Doctor F' },
];

const DoctorsPage = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.abc}>
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
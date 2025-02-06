import { useTranslation } from "react-i18next";
import styles from "./Pages.module.css";
import HeaderCovid from "../components/HeaderCovid/HeaderCovid";
import Navbar from "../components/Navbar/Navbar";
import DoctorBanner from "../components/Doctors_Clinics_Components/DoctorComponents/DoctorBanner";
import BackgroundTop from "../components/Doctors_Clinics_Components/BackgroundTop";
import Title from "../components/CommonComponent/ContentComponents/Title";
import SearchComponent from "../components/CommonComponent/SearchComponent";
import SelectClinic from "../components/Doctors_Clinics_Components/SelectClinic";
import List from "../components/Doctors_Clinics_Components/List";
import DoctorItem from "../components/Doctors_Clinics_Components/DoctorComponents/DoctorItem";
import { useQuery } from "@tanstack/react-query";
import { getAllDoctor } from "../Services/doctor";

export interface DoctorData {
  data?: any;
}

const DoctorsPage = ({ data }: DoctorData) => {
  const { t } = useTranslation();

  const doctorData = useQuery({
    queryKey: ["doctorList"],
    queryFn: () => getAllDoctor(data),
  });

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
          <List data={doctorData?.data || []} renderType="doctor" renderItem={(item) => <DoctorItem item={item} />} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;

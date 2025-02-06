import { useTranslation } from "react-i18next";
import styles from "./Pages.module.css";
import HeaderCovid from "../components/HeaderCovid/HeaderCovid";
import Navbar from "../components/Navbar/Navbar";
import ClinicBanner from "../components/Doctors_Clinics_Components/ClinicComponents/ClinicBanner";
import Title from "../components/CommonComponent/ContentComponents/Title";
import BackgroundTop from "../components/Doctors_Clinics_Components/BackgroundTop";
import SearchComponent from "../components/CommonComponent/SearchComponent";
import SelectClinic from "../components/Doctors_Clinics_Components/SelectClinic";
import List from "../components/Doctors_Clinics_Components/List";
import ClinicItem from "../components/Doctors_Clinics_Components/ClinicComponents/ClinicItem";
import { useQuery } from "@tanstack/react-query";
import { getAllSpecialties } from "../Services/specialty";

export interface SpecialtyData {
  data?: any;
}

const ClinicPage = ({ data }: SpecialtyData) => {
  const { t } = useTranslation();

  const specialty = useQuery({
    queryKey: ["clinicList"],
    queryFn: () => getAllSpecialties(data),
  });

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
            <List data={specialty?.data || []} renderType="clinic" renderItem={(item) => <ClinicItem item={item} />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicPage;

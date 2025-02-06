import { useTranslation } from "react-i18next";
import AdminTitle from "../../CommonComponent/ContentComponents/AdminTitle";

const ManageUsers = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AdminTitle title={t("manage") + " " + t("users")} />
    </div>
  );
};

export default ManageUsers;

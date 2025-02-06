import { useTranslation } from 'react-i18next'
import AdminTitle from '../../CommonComponent/ContentComponents/AdminTitle'

const ManageDoctors = () => {

  const { t } = useTranslation()

  return (
    <div>
      <AdminTitle title={t("manage") + " " + t("doctors")} />
    </div>
  )
}

export default ManageDoctors
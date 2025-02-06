import React from 'react'
import AdminTitle from '../../CommonComponent/ContentComponents/AdminTitle'
import { useTranslation } from 'react-i18next'

const ManageClinics = () => {

  const { t } = useTranslation()

  return (
    <div>
      <AdminTitle title={t("manage") + " " + t("clinics")} />
    </div>
  )
}

export default ManageClinics
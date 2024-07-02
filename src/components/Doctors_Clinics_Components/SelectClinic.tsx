import styles from "./index.module.css"
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Select, { StylesConfig } from 'react-select';

interface Specialty {
  id: number;
  name: string;
}

const specialties = [
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'orthopedics', label: 'Orthopedics' },
];

const SelectClinic = () => {

  const { t } = useTranslation()

  const handleChange = (selectedOption: any) => {
    console.log('Selected Option:', selectedOption);
  };

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#dbdeff',
      border: "none",
      borderRadius: '5px',
      height: "50px",
      fontSize: "13px",
      padding: "5px 0 5px 20px"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : '#dbdeff',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#007bff',
        color: "white",
      },
    }),
  };

  return (
    <div className={styles.search}>
      <Select
        id="specialty-select"
        options={specialties}
        onChange={handleChange}
        placeholder={t("select.specialty")}
        styles={customStyles}
      />
    </div>
  )
}

export default SelectClinic
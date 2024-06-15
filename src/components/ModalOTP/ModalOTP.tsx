import React, { useEffect, useRef, useState } from 'react'
import styles from "./ModalOTP.module.css"
import Modal from 'antd/es/modal'
import { useTranslation } from 'react-i18next'
import { Col, Input, Row, message } from 'antd'
import { useNavigate } from 'react-router-dom'

type MyModalProps = {
  open?: boolean
  onOk?: (otp: string) => void;
  onCancel?: () => void
}

const ModalOTP: React.FC<MyModalProps> = ({ open, onOk, onCancel }) => {

  const { t } = useTranslation()

  const navigate = useNavigate()

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null]);

  useEffect(() => {
    if (open) {
      inputRefs.current[0]?.focus();
    }
  }, [open]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (onOk && otpValue === "1111") {
      onOk(otpValue);
      navigate("/change-password")
    }
    else {
      if (onCancel)
        onCancel()
      message.error(t("something.went.wrong"))
    }

  };

  const ref: any[] = inputRefs.current as []

  return (
    <Modal className={styles.modal} title={t("enter.OTP")} open={open} onOk={handleSubmit} onCancel={onCancel}>
      <Row style={{ padding: "20px" }} gutter={8}>
        {otp.map((value, index) => (
          <Col key={index}>
            <Input
              ref={(el) => (ref[index] = el)}
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{ width: '40px', textAlign: 'center' }}
            />
          </Col>
        ))}
      </Row>
    </Modal>
  )
}

export default ModalOTP
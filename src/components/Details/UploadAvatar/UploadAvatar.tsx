import { Upload, Button, Image, message, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { RcFile } from 'antd/es/upload';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { updateUser } from '../../../Services/user';
import styles from "./UploadAvatar.module.css"

interface FileType extends UploadFile {
  originFileObj?: RcFile;
}

const UploadAvatar = () => {

  const { t } = useTranslation()

  const [fileList, setFileList] = useState<FileType[]>([]);

  const handleChange = ({ fileList: newFileList }: { fileList: FileType[] }) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file: FileType) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" />`);
  };

  const UploadMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      toast.success(t("confirm.email.successfully"));
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data.message || t("something.went.wrong"));
    },
  });

  const onSubmit = async () => {
    alert("A")
  }

  return (
    <div className={styles.container}>
      <Upload
        listType="picture-circle"
        fileList={fileList}
        onChange={handleChange}
        onPreview={handlePreview}
        beforeUpload={() => false}
        className={styles.upload}
      >
        {fileList.length < 1 && (
          <div>
            <UploadOutlined />
            <div>{t("upload")}</div>
          </div>
        )}
      </Upload>
      <Button
        type="primary"
        onClick={onSubmit}
        style={{ marginTop: 20 }}
      >
        {t("confirm")}
      </Button>
    </div>
  )
}

export default UploadAvatar
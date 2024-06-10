import { useTranslation } from "react-i18next";

interface IProps {
  id: string;
}

export default function TranslateText({ id }: IProps) {
  const { t } = useTranslation();

  return <span> {t(id)} </ span>;
}

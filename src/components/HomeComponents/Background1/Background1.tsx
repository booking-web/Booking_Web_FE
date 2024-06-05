import { Tabs, TabsProps } from 'antd'
import Background1 from '../../CommonComponent/Background1'
import styles from "./Background1.module.css"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Text from '../../helpers/I18Text'
import Saigon from './Saigon'
import Hanoi from './Hanoi'


const Child_BG1 = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <Text id="saigon" />,
    },
    {
      key: '2',
      label: <Text id="hanoi" />,
    },
  ];
  const [activeKey, setActiveKey] = useState<string>('1');

  const handleChange = (key: string) => {
    setActiveKey(key);
  };
  const { t } = useTranslation();

  return (
    <Background1>
      <div className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{t("explore.clinics")}</h3>
            <div className={styles.a}>
              <Tabs size="large" defaultActiveKey="1" activeKey={activeKey} onChange={handleChange} items={items} />
            </div>
          </div>
        </div>
        <div className={styles.swapContent}>
          {activeKey === '1' && <Saigon />}
          {activeKey === '2' && <Hanoi />}
        </div>
      </div>
    </Background1>
  )
}

export default Child_BG1
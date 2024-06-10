import styles from "./Background8.module.css"
import { useTranslation } from "react-i18next"
import bg from "../../../images/backgrounds/background8/bg.svg"
import Title from "../../CommonComponent/ContentComponents/Title"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import Text from "../../CommonComponent/ContentComponents/Text"
import icon1 from "../../../images/backgrounds/background8/icon1.svg"
import icon2 from "../../../images/backgrounds/background8/icon2.svg"
import icon3 from "../../../images/backgrounds/background8/icon3.svg"
import icon4 from "../../../images/backgrounds/background8/icon4.svg"
import icon5 from "../../../images/backgrounds/background8/icon5.svg"
import icon6 from "../../../images/backgrounds/background8/icon6.svg"
import icon7 from "../../../images/backgrounds/background8/icon7.svg"
import TranslateText from "../../helpers/I18Text"

const Background8 = () => {

  const items = [
    {
      row: 1,
      items: [
        {
          icon: icon1,
          title: <TranslateText id="bg8.content1" />,
          text: "13 bài viết"
        },
        {
          icon: icon2,
          title: <TranslateText id="bg8.content2" />,
          text: "10 bài viết"
        }
      ]
    },
    {
      row: 2,
      items: [
        {
          icon: icon3,
          title: <TranslateText id="bg8.content3" />,
          text: "15 bài viết"
        },
        {
          icon: icon4,
          title: <TranslateText id="bg8.content4" />,
          text: "8 bài viết"
        }
      ]
    },
    {
      row: 3,
      items: [
        {
          icon: icon5,
          title: <TranslateText id="bg8.content5" />,
          text: "12 bài viết"
        },
        {
          icon: icon6,
          title: <TranslateText id="bg8.content6" />,
          text: "9 bài viết"
        },
        {
          icon: icon7,
          title: <TranslateText id="bg8.content7" />,
          text: "11 bài viết"
        }
      ]
    }
  ];

  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={bg} style={{ height: "42vw" }} />
      </div>
      <div className={styles.contentRight}>
        <div className={styles.contentRightChildren}>
          {items.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.parent}>
                  <div className={styles.children}>
                    <img src={item.icon} />
                    <div className={styles.content}>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.comment}>{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contentLeft}>
        <Title title={t("bg8.title")}></Title>
        <Separator></Separator>
        <Text text={t("bg8.text")}></Text>
      </div>
    </div>
  )
}

export default Background8
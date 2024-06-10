import styles from "./Background.module.css"
import bg from "../../../images/backgrounds/background9/bg.svg"
import h1 from "../../../images/backgrounds/background9/h1.jpg"
import h2 from "../../../images/backgrounds/background9/h2.jpg"
import h3 from "../../../images/backgrounds/background9/h3.jpg"
import h4 from "../../../images/backgrounds/background9/h4.jpg"
import h5 from "../../../images/backgrounds/background9/h5.jpg"
import h6 from "../../../images/backgrounds/background9/h6.jpg"
import h7 from "../../../images/backgrounds/background9/h7.jpg"
import h8 from "../../../images/backgrounds/background9/h8.jpg"
import h9 from "../../../images/backgrounds/background9/h9.jpg"
import h10 from "../../../images/backgrounds/background9/h10.jpg"
import Title from "../../CommonComponent/ContentComponents/Title"
import Separator from "../../CommonComponent/ContentComponents/Separator"
import Text from "../../CommonComponent/ContentComponents/Text"
import { useTranslation } from "react-i18next"

const Background9 = () => {

  const { t } = useTranslation()

  const items = [
    {
      row: 1,
      items: [
        {
          image: h1
        },
        {
          image: h2
        },
        {
          image: h3
        },
      ]
    },
    {
      row: 2,
      items: [
        {
          image: h4
        },
        {
          image: h5
        },
        {
          image: h6
        },
      ]
    },
    {
      row: 3,
      items: [
        {
          image: h7
        },
        {
          image: h8
        },
        {
          image: h9
        },
        {
          image: h10
        },
      ]
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={bg} style={{ width: "24vw" }} />
      </div>
      <div className={styles.media}>
        {items.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.items.map((item, itemIndex) => (
              <img key={itemIndex} className={styles.item} src={item.image} style={{ height: "60px" }} />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Title title={t("bg9.title")}></Title>
        <Separator></Separator>
        <Text text={t("bg9.text")}></Text>
      </div>
    </div>
  )
}

export default Background9
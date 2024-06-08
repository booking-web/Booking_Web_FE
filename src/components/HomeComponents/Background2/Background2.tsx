import styles from "./Background2.module.css"
import img1 from "../../../images/backgrounds/background2/img1.png"
import img2 from "../../../images/backgrounds/background2/img2.png"
import img3 from "../../../images/backgrounds/background2/img3.png"
import img4 from "../../../images/backgrounds/background2/img4.png"
import Text from "../../helpers/I18Text"

const Background2 = () => {
  const items = [
    {
      image: img1,
      backgroundColor: '#daf5fb',
      title: <Text id="bg4.title" />
    },
    {
      image: img2,
      backgroundColor: "#eae7fb",
      title: <Text id="jio.pharmacy" />
    },
    {
      image: img3,
      backgroundColor: '#f2ddde',
      title: <Text id="find.a.doctor" />
    },
    {
      image: img4,
      backgroundColor: '#f8fbda',
      title: <Text id="care.packages" />
    }
  ];
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} style={{ backgroundColor: item.backgroundColor }} className={styles.item}>
          <img src={item.image} className={styles.img} />
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Background2
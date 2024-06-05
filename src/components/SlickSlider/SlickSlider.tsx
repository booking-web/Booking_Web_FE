import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlickSlider.module.css"
import banner1 from "../../images/slickSlider_images/banner1.jpg"
import banner2 from "../../images/slickSlider_images/banner2.jpg"
import banner3 from "../../images/slickSlider_images/banner3.jpg"
import banner4 from "../../images/slickSlider_images/banner4.jpg"
import banner5 from "../../images/slickSlider_images/banner5.jpg"
import heart from "../../images/slickSlider_images/heart.svg"
import clinic from "../../images/slickSlider_images/clinic.svg"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const MyCarousel = () => {

  const { t } = useTranslation()
  const refSlide = useRef<Slider | null>(null);

  const handleClickNext = () => {
    if (refSlide.current) {
      refSlide.current.slickNext();
    }
  };


  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  }

  return (
    <div className={styles.container}>
      <Slider ref={refSlide} {...settings} className={styles.slick}>
        <div className={styles.images}>
          <img className={styles.img} src={banner1} />
        </div>
        <div className={styles.images}>
          <img className={styles.img} src={banner2} />
        </div>
        <div className={styles.images}>
          <img className={styles.img} src={banner3} />
        </div>
        <div className={styles.images}>
          <img className={styles.img} src={banner4} />
        </div>
        <div className={styles.images}>
          <img className={styles.img} src={banner5} />
        </div>
      </Slider>
      <div className={styles.buttons}>
        <button onClick={handleClickNext} className={styles.button} id={styles.right}><RightOutlined /></button>
      </div>
      <div className={styles.booking}>
        <img className={styles.icon} id={styles.heart} src={heart} />
        <h3 className={styles.title}> {t("more.than300k")} <br /> {t("customers.trust")} <br /> {(t("the.service"))} </h3>
        <button className={styles.btn} > {t("make.an.appointment")} </button>
        <img className={styles.icon} id={styles.clinic} src={clinic} />
      </div>
    </div>
  );
};

export default MyCarousel;

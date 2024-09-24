import React from "react";
import styles from "./SectionMain.module.scss";

import SliderSimple from "../../../components/sliderSimple/SliderSimple";
import { mainCardInfo } from "./data/MainCardInfo";

import aboutMainImg from "../../../assets/img/about/about-main-img-bike.png";
import SliderItem from "./components/sliderItem/SliderItem";

<SliderSimple />;
const SectionMain = () => {
  return (
    <>
      <div className="container">
        <h1 className={styles.mainTitle}>
          A <span className={styles.mainTitleBike}>BICYCLE</span> IS NOT JUST A
          MEANS OF TRANSPORTATION!
        </h1>

        <div className={styles.mainCard}>
          {mainCardInfo.map((item) => (
            <SliderItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.slider}>
        <SliderSimple
          itemsList={mainCardInfo}
          SliderItemComponent={SliderItem}
        />
      </div>
      <div className={styles.mainAbout}>
        <div className={styles.mainAboutItems}>
          <div className={styles.mainAboutItemsWrapp}>
            <h2 className={styles.mainAboutTitle}>A FEW WORDS ABOUT US</h2>

            <p className={styles.mainAboutDesc}>
              A bicycle is not just a means of transportation. We, the
              World-Bike team, are confident in this. For us, a bicycle is a
              whole life full of freedom, drive, adventure and new discoveries.
            </p>
            <p className={styles.mainAboutDesc}>
              We sincerely love what we do and try to make the bike an integral
              part of your life.
            </p>
          </div>
        </div>
        <img className={styles.mainAboutImg} src={aboutMainImg} alt="Bike" />
      </div>
    </>
  );
};

export default SectionMain;

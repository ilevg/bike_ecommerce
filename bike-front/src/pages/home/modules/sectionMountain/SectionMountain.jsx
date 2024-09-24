import React from "react";
import Button from "../../../../UI/button/Button";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionMountain.module.scss";

import mountOne from "../../../../assets/img/home/mountains/mount-1.png";
import mountTwo from "../../../../assets/img/home/mountains/mount-2.png";
import mountThree from "../../../../assets/img/home/mountains/mount-3.png";
import mountFour from "../../../../assets/img/home/mountains/mount-4.png";
import mountBike from "../../../../assets/img/home/mountains/mountBike.png";

import { mountCardsData } from "../../data/data";
import InfoCard from "../../components/infoCard/InfoCard";
import SliderSimple from "../../../../components/sliderSimple/SliderSimple";
import { Link } from "react-router-dom";

const SectionMountain = () => {
  return (
    <div className="container">
      <HomeSectionTitle titleText="mountain" />

      <div className={styles.mountain}>
        <div className={styles.mountainSliderWrapp}>
          <SliderSimple
            itemsList={mountCardsData}
            SliderItemComponent={InfoCard}
          />
        </div>

        <div className={styles.mountainItemsWrapp}>
          <div className={styles.mountainItems}>
            <div className={styles.mountainItem}>
              <div className={styles.mountainTitleWrapp}>
                <span className={styles.mountainTitle}>Equipment</span>
                <img
                  className={styles.mountainIcon}
                  src={mountOne}
                  alt="Equipment"
                />
              </div>
              <span>
                Contrary to popular belief, lorem ipsum is not simply random
                text. It has roots in
              </span>
            </div>
            <div className={styles.mountainItem}>
              <div className={styles.mountainTitleWrapp}>
                <span className={styles.mountainTitle}>Transmission</span>
                <img
                  className={styles.mountainIcon}
                  src={mountTwo}
                  alt="Transmission"
                />
              </div>
              <span>
                Many desktop publishing packages and web page editors now use
                lorem ipsum as{" "}
              </span>
            </div>
          </div>

          <div className={styles.mountainItems}>
            <div className={styles.mountainItem}>
              <div className={styles.mountainTitleWrapp}>
                <span className={styles.mountainTitle}>On-b computer</span>
                <img
                  className={styles.mountainIcon}
                  src={mountThree}
                  alt="computer"
                />
              </div>
              <span>
                The point of using lorem ipsum is that it has a more-or-less
                normal distribution of letters
              </span>
            </div>
            <div className={styles.mountainItem}>
              <div className={styles.mountainTitleWrapp}>
                <span className={styles.mountainTitle}>Frame</span>
                <img
                  className={styles.mountainIcon}
                  src={mountFour}
                  alt="Frame"
                />
              </div>
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of
              </span>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className={styles.mountainWrapper}>
          <img className={styles.mountainImg} src={mountBike} alt="Bike" />
          <div className={styles.mountainDesc}>
            Mountain bike, despite its name, is often and actively used in urban
            conditions, as it has a number of character
          </div>
          <Link to="/trade-in">
            <Button width={180} text="Catalog" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionMountain;

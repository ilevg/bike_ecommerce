import React from "react";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionDetails.module.scss";

import imgLeft from "../../../../assets/img/home/details/details-img.png";
import classNames from "classnames";

import { detailsCardsData } from "../../data/data";
import InfoCard from "../../components/infoCard/InfoCard";
import SliderSimple from "../../../../components/sliderSimple/SliderSimple";

const SectionDetails = () => {
  return (
    <div className={styles.detailsWrapper}>
      <div className="container">
        <HomeSectionTitle titleText="advantages" />
        <div className={styles.detailsSlider}>
          <SliderSimple
            itemsList={detailsCardsData}
            SliderItemComponent={(props) => (
              <InfoCard {...props} bgColor={true} />
            )}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.detailsImgWrapp}>
            <img className={styles.detailsImg} src={imgLeft} alt="Bike" />
          </div>

          <div className={styles.detailsItemsWrapp}>
            <div className={styles.detailsItems}>
              <div className={styles.detailsItem}>
                <div className={styles.detailsTitleWrapp}>
                  <span className={styles.detailsTitle}>Equipment</span>
                </div>
                <span>
                  Contrary to popular belief, lorem ipsum is not simply random
                  text. It has roots in
                </span>
              </div>
              <div className={styles.detailsItem}>
                <div className={styles.detailsTitleWrapp}>
                  <span className={styles.detailsTitle}>Transmission</span>
                </div>
                <span>
                  Many desktop publishing packages and web page editors now use
                  lorem ipsum as{" "}
                </span>
              </div>
            </div>

            <div
              className={classNames(styles.detailsItems, styles.ItemsSecond)}
            >
              <div className={styles.detailsItem}>
                <div className={styles.detailsTitleWrapp}>
                  <span className={styles.detailsTitle}>On-b computer</span>
                </div>
                <span>
                  The point of using lorem ipsum is that it has a more-or-less
                  normal distribution of letters
                </span>
              </div>
              <div className={styles.detailsItem}>
                <div className={styles.detailsTitleWrapp}>
                  <span className={styles.detailsTitle}>Frame</span>
                </div>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of
                </span>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;

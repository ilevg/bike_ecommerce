import React from "react";
import styles from "./SectionBenefits.module.scss";
import benefitsImg from "../../../../assets/img/home/benefitsSection/benefits.png";
import benefOne from "../../../../assets/img/home/benefitsSection/benef-1.png";
import benefTwo from "../../../../assets/img/home/benefitsSection/benef-2.png";
import benefThree from "../../../../assets/img/home/benefitsSection/benef-3.png";
import benefFour from "../../../../assets/img/home/benefitsSection/benef-4.png";
import classNames from "classnames";

const SectionBenefits = () => {
  return (
    <div>
      <img
        className={styles.BenefitsBannerImg}
        src={benefitsImg}
        alt="bicycle"
      />
      <div className={styles.BenefitsWrapper}>
        <div className={classNames(styles.BenefitItems, "container")}>
          <div className={styles.benefitsItem}>
            <div className={styles.benefitsSubtitleWrapp}>
              <img className={styles.benefitsIcon} src={benefOne} alt="" />
              <span className={styles.benefitsSubtitle}>European brands</span>
            </div>
            <span>Introducing dozens of European brands</span>
          </div>

          <div className={styles.benefitsItem}>
            <div className={styles.benefitsSubtitleWrapp}>
              <img className={styles.benefitsIcon} src={benefTwo} alt="" />
              <span className={styles.benefitsSubtitle}>Eternal guarantee</span>
            </div>
            <span>We provide a lifetime warranty for some brands</span>
          </div>

          <div className={styles.benefitsItem}>
            <div className={styles.benefitsSubtitleWrapp}>
              <img className={styles.benefitsIcon} src={benefThree} alt="" />
              <span className={styles.benefitsSubtitle}>Pre-sale setup</span>
            </div>
            <span>
              Pre-sale setup Specialists will set up your bike in the best
              possible way
            </span>
          </div>

          <div className={styles.benefitsItem}>
            <div className={styles.benefitsSubtitleWrapp}>
              <img className={styles.benefitsIcon} src={benefFour} alt="" />
              <span className={styles.benefitsSubtitle}>
                Delivery in 24 hours
              </span>
            </div>
            <span>We deliver the goods by all popular transport companies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBenefits;

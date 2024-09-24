import React from "react";
import { Link } from "react-router-dom";
import HomeSectionTitle from "../../ui/homeSectionTitle/HomeSectionTitle";
import styles from "./SectionCatalog.module.scss";

import bike from "../../../../assets/img/home/catalogSection/bike.png";
import bikeSec from "../../../../assets/img/home/catalogSection/bike-2.png";
import euqip from "../../../../assets/img/home/catalogSection/euqip.png";
import wheel from "../../../../assets/img/home/catalogSection/wheel.png";
import access from "../../../../assets/img/home/catalogSection/access.png";

import classNames from "classnames";

const SectionCatalog = () => {
  return (
    <div className="container">
      <HomeSectionTitle titleText="catalog" />
      <div>
        <Link
          className={classNames(styles.catalogBike, styles.catalogLink)}
          to="/bicycles"
        >
          <h4
            className={classNames(styles.catalogTitle, styles.catalogTitleBike)}
          >
            BICYCLES
          </h4>
          <img
            className={classNames(styles.catalogBikeImg, styles.catalogImg)}
            src={bike}
            alt="bike"
          />
        </Link>

        <div className={styles.catalogContent}>
          <Link
            className={classNames(styles.catalogTrade, styles.catalogLink)}
            to="/bicycles"
          >
            <h4
              className={classNames(
                styles.catalogTitle,
                styles.catalogTitleTrade
              )}
            >
              TRADE-IN
            </h4>
            <img
              className={classNames(styles.catalogTradeImg, styles.catalogImg)}
              src={bikeSec}
              alt="bike"
            />
          </Link>

          <Link
            className={classNames(styles.catalogAccess, styles.catalogLink)}
            to="/bicycles"
          >
            <h4
              className={classNames(
                styles.catalogTitle,
                styles.catalogTitleAccess
              )}
            >
              ACCESSORIES
            </h4>
            <img
              className={classNames(styles.catalogAccessImg, styles.catalogImg)}
              src={access}
              alt="bike"
            />
          </Link>

          <div className={styles.catalogEquipWrapp}>
            <Link
              className={classNames(styles.catalogEquip, styles.catalogLink)}
              to="/bicycles"
            >
              <h4
                className={classNames(
                  styles.catalogTitle,
                  styles.catalogTitleEquip
                )}
              >
                EQUIPMENT
              </h4>
              <img
                className={classNames(
                  styles.catalogEquipImg,
                  styles.catalogImg
                )}
                src={euqip}
                alt="bike"
              />
            </Link>

            <div className={styles.catalogWheel}>
              <img
                className={classNames(
                  styles.catalogWheelImg,
                  styles.catalogImg
                )}
                src={wheel}
                alt="bike"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCatalog;

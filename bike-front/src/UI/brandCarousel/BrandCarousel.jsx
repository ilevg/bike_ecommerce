import React from "react";
import brandImgList from "./constants/brandImg.js";
import classes from "./BrandCarousel.module.scss";

const BrandCarousel = () => {
  return (
    <div className={classes.BrandCarousel}>
      <div>
        <span className={classes.BrandCarouselWrapper}>
          {brandImgList.map(({ imgUrl, alt }) => (
            <img
              className={classes.BrandCarouselImg}
              key={alt}
              src={imgUrl}
              alt={alt}
            />
          ))}
        </span>
        <span className={classes.BrandCarouselWrapper}>
          {brandImgList.map(({ imgUrl, alt }) => (
            <img
              className={classes.BrandCarouselImg}
              key={alt}
              src={imgUrl}
              alt={alt}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default BrandCarousel;

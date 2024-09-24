import React from "react";
import Slider from "react-slick";
import "./SingleProductImgSlider.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SingleProductImgSlider = ({ productImages }) => {
  const productImagesSrc = [
    ...new Set(productImages && productImages.map((image) => image.src)),
  ];
  const images = productImagesSrc?.map((image, index) => (
    <div key={index}>
      <img src={image} alt={image} />
    </div>
  ));

  const settings = {
    customPaging: function (i) {
      const thumbnail = productImagesSrc[i];
      return (
        <a className="imgLink">
          <img className="imgMini" src={thumbnail} alt="Product Thumbnail" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="slider-container">
      {images && images.length > 0 ? (
        <Slider {...settings}>{images}</Slider>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleProductImgSlider;

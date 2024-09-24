import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSimple = ({ itemsList, SliderItemComponent }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                {
                    itemsList.map((item, index) => (
                        <div key={index}>
                            <SliderItemComponent item={item} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default SliderSimple

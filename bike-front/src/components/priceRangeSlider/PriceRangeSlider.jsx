import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Slider from "react-slider";
import { FilterContext } from "../../context";
import "./PriceRangeSlider.scss";

const PriceRangeSlider = ({ minPrice, maxPrice }) => {
  const { updateFilter } = useContext(FilterContext);
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  useEffect(() => {
    const priceRange = [min, max];
    updateFilter("Price", priceRange);
  }, [min, max, updateFilter]);

  const handleChange = ([min, max]) => {
    setMin(min);
    setMax(max);
  };

  return (
    <div className="price-range-slider">
      <Slider
        min={+minPrice}
        max={+maxPrice}
        value={[+min, +max]}
        onChange={handleChange}
      />
      <div className="price-range-values">
        <span>$ {min}</span>
        <span>$ {max}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

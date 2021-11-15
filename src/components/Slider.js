import React from "react";
import SliderComp from "./SliderComp";

const Slider = ({ data, params, product }) => {
  //console.log(data, params, product);
  return (
    <div>
      <div>
        {data[params].map((el) => (
          <SliderComp key={el.id} props={el} />
        ))}
      </div>
    </div>
  );
};

export default Slider;

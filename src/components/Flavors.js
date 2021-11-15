import React from "react";

const Flavors = ({ data, params, product }) => {
  return (
    <div>
      {data[params].map((el) => (
        <img key={el.id} src={el.flavorUrl} alt={el.name} />
      ))}
    </div>
  );
};

export default Flavors;

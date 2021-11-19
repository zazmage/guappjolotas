import React from "react";
import { useSearchParams } from "react-router-dom";
import { FlavorCont } from "../styles/StyledComp";

const Flavors = ({ data, params, product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (e) => {
    setSearchParams({ product: e.target.getAttribute("alt") });
  };
  return (
    <FlavorCont>
      <h2>Sabor</h2>
      <div>
        {data[params].map((el) => (
          <img
            key={el.id}
            src={el.flavorUrl}
            alt={el.name}
            onClick={handleClick}
          />
        ))}
      </div>
    </FlavorCont>
  );
};

export default Flavors;

import React, { useContext } from "react";
import MyCard from "./MyCard";
import { ApiContext } from "../context/ApiProvider";
import MyBadSerch from "./MyBadSerch";
const MyCardContainer = () => {
  const { filteredCharacter } = useContext(ApiContext);

  console.log(filteredCharacter().length != 0 ? "tiene algo": "no tiene nada ")
  
  return (
    <div className="container">
      { filteredCharacter().length != 0 ? filteredCharacter().map((x) => (
        <MyCard
          key={x.id}
          name={x.name}
          specie={x.specie}
          role={x.role}
          img={x.imageUrl}
          status={x.status}
          universe={x.universe}
          trasnform={x.trasnform}
          planet={x.originplanet}
        />
      )) : <MyBadSerch/>}
    </div>
  );
};

export default MyCardContainer;

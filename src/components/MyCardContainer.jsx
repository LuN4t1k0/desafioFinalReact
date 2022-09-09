import React, { useContext } from "react";
import MyCard from "./MyCard";
import { ApiContext } from "../context/ApiProvider";
const MyCardContainer = () => {
  const { filteredCharacter } = useContext(ApiContext);

  return (
    <div className="container">
      {filteredCharacter().map((x) => (
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
      ))}
      
    </div>
  );
};

export default MyCardContainer;


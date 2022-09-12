import { useContext } from "react";
import { ApiContext } from "../context/ApiProvider";

const MyMenu = () => {
  const { searchCharacter, search } = useContext(ApiContext);

  return (
    <div className="contenedorMenu ">
      <div className="logo">
        <img src="../src/img/radarDragon.png" alt="" />
        <h1>Radar Dragon</h1>
      </div>
      <div className="search">
        <input
          type="text"
          className="form-control "
          placeholder="Nombre, Universo, tipo"
          value={search}
          onChange={searchCharacter}
        />
      </div>
    </div>
  );
};

export default MyMenu;

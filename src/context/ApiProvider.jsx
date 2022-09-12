import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();



/**
 * GetData() es una función asíncrona que obtiene datos de la API, los ordena y establece el estado de
 * los datos
 */
const ApiProvider = (props) => {
  const getData = async () => {
    const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
    const response = await fetch(URL);
    const result = await response.json();
    sortData(result, "name", true);
    setData(result);
  };

/**
 * Ordena una matriz de objetos por una clave dada
 * @returns una matriz ordenada.
 */
  const sortData = (arr, key, asc = true) => {
    return arr.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      if (asc) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return x > y ? -1 : x < y ? 1 : 0;
      }
    });
  };

  const filteredCharacter = () => {
    if (search === 0) {
      return data.slice(currentPage, currentPage + 8);
    }
    const filtered = data.filter(
      (x) =>
        x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.specie.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.role.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.universe.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        x.status.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (
      data.filter(
        (x) =>
          x.name.toLocaleLowerCase().includes(search) ||
          x.specie.toLocaleLowerCase().includes(search) ||
          x.role.toLocaleLowerCase().includes(search) ||
          x.universe.toLocaleLowerCase().includes(search) ||
          x.status.toLocaleLowerCase().includes(search)
      ).length >
      currentPage + 8
    ) {
      setCurrentPage(currentPage + 8);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
    }
  };

  const searchCharacter = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  useEffect(() => {
    getData();
    // filteredCharacter();
  }, []);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <ApiContext.Provider
      value={{
        data,
        setData,
        filteredCharacter,
        nextPage,
        prevPage,
        search,
        searchCharacter,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;


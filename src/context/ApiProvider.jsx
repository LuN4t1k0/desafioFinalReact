import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = (props) => {
  const getData = async () => {
    const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
    const response = await fetch(URL);
    const result = await response.json();
    setData(result);
    // console.log(result)
  };

  const filteredCharacter = () => {
    if (search === 0) {
      return data.slice(currentPage, currentPage + 8);
    }
    const filtered = data.filter(
      (x) =>
        x.name.toLocaleLowerCase().includes(search) ||
        x.specie.toLocaleLowerCase().includes(search) ||
        x.role.toLocaleLowerCase().includes(search) ||
        x.universe.toLocaleLowerCase().includes(search) ||
        x.status.toLocaleLowerCase().includes(search)
    );
    return filtered.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if(filteredCharacter().length > currentPage + 5){
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
    filteredCharacter();
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

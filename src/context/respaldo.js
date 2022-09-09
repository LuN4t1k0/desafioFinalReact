import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

  const ApiProvider = (props) => {
  
    const getData = async () => {
    const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
    const response = await fetch(URL);
    const result = await response.json();
    setData(result);
    // console.log(result)
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider value={data}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

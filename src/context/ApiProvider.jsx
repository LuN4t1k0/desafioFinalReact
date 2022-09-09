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

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <ApiContext.Provider value={{ data, setData }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

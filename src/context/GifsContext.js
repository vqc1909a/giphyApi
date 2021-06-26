import React, {createContext, useState} from 'react';

const GifsContext = createContext();

export const GifsProvider = (props) => {
  const [gifs, setGifs] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const elementosPorPagina = 10;
  
  return <GifsContext.Provider value={{gifs, setGifs, totalItems, setTotalItems, elementosPorPagina}}>
    {props.children}
  </GifsContext.Provider>
}

export default GifsContext;
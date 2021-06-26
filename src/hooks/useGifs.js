import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/gifsServices';
import GifsContext from '../context/GifsContext';


const useGifs = (search) => {
  const INITIAL_PAGE = parseInt(sessionStorage.getItem("lastPage")) || 1;
  const {gifs, setGifs, setTotalItems, elementosPorPagina} = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  
  let lastSearch = search || (sessionStorage.getItem("lastSearch") || "random");
    
  useEffect(() => {
    setLoading(true);
    getGifs({search: lastSearch, page, limit: elementosPorPagina }).then(({gifs, total_items}) => {
      setGifs(gifs);
      setTotalItems(total_items);
      sessionStorage.setItem("lastPage", page);
      sessionStorage.setItem("lastSearch", lastSearch);
      setLoading(false);
    });
  }, [lastSearch, page, setGifs, setTotalItems, elementosPorPagina])

  return [loading, gifs, page, setPage];
}
 
export default useGifs;
 
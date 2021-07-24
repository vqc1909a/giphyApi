import React, {useState, useEffect} from 'react';
import ListGifs from '../components/SearchResult/ListGifs';
import useGifs from '../hooks/useGifs';
import useLazy from '../hooks/useLazy';
import SearchForm from '../components/Home/SearchForm';
import {Helmet} from 'react-helmet';

const HomeView = () => {
  const [, gifs, , setPage] = useGifs({search: ""}); 
  const [gifsTotal, setGifsTotal] = useState([]);
  const [show, elementRef] = useLazy({distance: 100, once: false});


  useEffect(() => {
    setGifsTotal((state) => state.concat(gifs));
    // eslint-disable-next-line
  }, [gifs]);

  useEffect(() => {
    if(show) setPage((state) => state + 1);
    // eslint-disable-next-line
  }, [show]); 

  return (
    <>
    <Helmet>
      <title>Home | Giffy</title>
    </Helmet>
    <header>
      <SearchForm ></SearchForm>
    </header>
    <h2>Ultima Búsqueda (No hacer busquedas particulares por aqui)</h2>
    <div className="main">
      <div className="main-content">
        <ListGifs gifs={gifsTotal} />       
        <div className="visor" ref={elementRef}>
        </div>
      </div>
    </div>
    </>
  );
}
 
export default HomeView;
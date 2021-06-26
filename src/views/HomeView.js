import React, {useState, useEffect, useCallback} from 'react';
import {useLocation } from 'wouter';
import ListGifs from '../components/SearchResult/ListGifs';
import useGifs from '../hooks/useGifs';
import useLazy from '../hooks/useLazy';
import SearchForm from '../components/Home/SearchForm';
const HomeView = () => {
  console.log("HomeView");
  const [, setLocation] = useLocation();
  const [, gifs, , setPage] = useGifs(); 
  const [gifsTotal, setGifsTotal] = useState([]);

  const [show, elementRef] = useLazy({distance: 100, once: false});

  const handleSubmit = useCallback(({search}) => {
    setLocation(`/search/${search}`)
  }, [setLocation]);

  useEffect(() => {
    console.log("gifs generales");
    setGifsTotal((state) => state.concat(gifs));
  }, [gifs]);

  useEffect(() => {
    console.log(show);
    if(show) setPage((state) => state + 1);
    // eslint-disable-next-line
  }, [show]); 

  return (
    <>
    
    <SearchForm onSubmit={handleSubmit}></SearchForm>
    <h2>Ultima Búsqueda</h2>
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
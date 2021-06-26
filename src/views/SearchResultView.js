import React from 'react';
import ListGifs from '../components/SearchResult/ListGifs';
import useGifs from '../hooks/useGifs';
import ButtonsPage from '../components/SearchResult/ButtonsPage';
import Spinner from '../components/Utilities/Spinner';
import { Helmet } from 'react-helmet';
const SearchResultView = (props) => {
  console.log("SearchResultView");
  const {search} = props.params;
  const [loading, gifs, page, setPage] = useGifs(search);

  const title = !loading ? `Resultados de ${search}` : "Cargando";
  const description = `Resultados de la busqueda ${search}`

return <>
    <Helmet>
      <title>{title} | Giffy</title>
      <meta name="description" content={description} />
    </Helmet>
    <h2>{decodeURI(search)}</h2>
    {loading
    ?
      <Spinner></Spinner>
    :
      <ListGifs gifs={gifs} />
    }
      <ButtonsPage page={page} setPage={setPage}></ButtonsPage>       
  </>
  
     
      
     
    
  
}
export default SearchResultView;
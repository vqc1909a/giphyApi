import React from 'react';
import ListGifs from '../components/SearchResult/ListGifs';
import useGifs from '../hooks/useGifs';
import ButtonsPage from '../components/SearchResult/ButtonsPage';
import Spinner from '../components/Utilities/Spinner';
const SearchResultView = (props) => {
  console.log("SearchResultView");
  const {search} = props.params;
  console.log(search);
  const [loading, gifs, page, setPage] = useGifs(search);

  return <>
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
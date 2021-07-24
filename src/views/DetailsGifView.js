import React, {useState, useEffect} from 'react';
import {useLocation} from 'wouter';
import Gif from '../components/SearchResult/Gif';
import useGlobalGifs from '../hooks/useGlobalGifs';
import gifService from '../services/gifService';
import Spinner from '../components/Utilities/Spinner';
import {Helmet} from "react-helmet";

const DetailsGifView = (props) => {
  const [, setLocation] = useLocation();
  const {id} = props.params;
  const {gifs} = useGlobalGifs();

  const gifFromCache = gifs.find(gif => gif.id === id)
  const [gif, setGif] = useState(gifFromCache);

  const title = gif ? gif.title : "Cargando";
  const description = gif ? gif.url : "";
  useEffect(() => {
    if(!gif) return gifService({id}).then(gif => setGif(gif)).catch((err) => setLocation("/404"));
    // eslint-disable-next-line
  }, []);

  
  return (
    <>
    <Helmet>
      <title>{title} | Giffy</title>
      <meta name="description" content={description} />
    </Helmet>
    {
      !gif 
      ? 
        <>
        <Spinner></Spinner>
        </>
      :
      <Gif id={gif.id} title={gif.title} url={gif.url} slug={gif.slug}></Gif>
    }
    </>
  );
}
 
export default DetailsGifView;

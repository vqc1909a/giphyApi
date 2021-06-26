import React from 'react';
import Gif from '../components/SearchResult/Gif';
import useGlobalGifs from '../hooks/useGlobalGifs';
const DetailsGif = (props) => {
  console.log("DetailsGifView");
  const {slug} = props.params;
  const {gifs} = useGlobalGifs();

  const gif = gifs.find(gif => gif.slug === slug);

  return (
    <Gif gif={gif}></Gif>
  );
}
 
export default DetailsGif;

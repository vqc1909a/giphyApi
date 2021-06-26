import React from 'react';
import Gif from './Gif';
import Spinner from '../../components/Utilities/Spinner';
const ListGifs = ({gifs}) => {

  return <>
     {!gifs.length
      ?
      <Spinner></Spinner>
      :
      <div className="gifs">
      {gifs.map(({id, title, url}) => <Gif id={id} key={id} title={title} url={url} ></Gif>)}
      </div>
     }
  </>
  
}
 
export default React.memo(ListGifs);
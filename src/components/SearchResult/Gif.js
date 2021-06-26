import React from 'react';
import {Link} from 'wouter';
const Gif = ({id, title, url, slug}) => {

  return (
    <div className="gif">
      <h3>{title}</h3>
      <Link to={`/gif/${slug}`}>
        <img loading="lazy" src={url} alt={title} key={id}></img>
      </Link>
    </div>  

  );
}
 
export default React.memo(Gif);
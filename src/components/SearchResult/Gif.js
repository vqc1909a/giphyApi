import React from 'react';
import {Link} from 'wouter';
const Gif = ({id, title, url}) => {

  return (
    <div className="gif" data-testid="gif">
      <h3>{title}</h3>
      <Link to={`/gif/${id}`}>
        <img loading="lazy" src={url} alt={title} key={id}></img>
      </Link>
    </div>  

  );
}
 
export default React.memo(Gif);
import React from 'react';
import { Link } from 'wouter';
import { v4 as uuidv4} from 'uuid';

const Category = ({name, options}) => {
  return (
    <>
      <h3>{name}</h3>
      <ul className="categorias">
      {options.map(gif => {
        return <li key={uuidv4()}><Link to={`/search/${gif.toLowerCase()}`} >{gif}</Link></li>
      })}
      </ul>
    </>
  );
}
 
export default Category;
import React, {useContext} from 'react';
import GifsContext from '../../context/GifsContext';
import { v4 as uuidv4} from 'uuid';

const ButtonsPage = ({page, setPage}) => {
 const {totalItems, elementosPorPagina} = useContext(GifsContext);
 const total_paginas = Math.ceil(totalItems / elementosPorPagina);
 const handlePage = (e)=> {
  setPage(parseInt(e.target.dataset.number));
 }                

 const array_paginas = [];
 const array_pagina_actual = [];

 const array_paginas_especial = [];
 const array_pagina_actual_especial = [];

 for (let index = 0; index < total_paginas; index++) {
  array_paginas.push(index);
 }
 for (let index = page - 2; index < total_paginas; index++) {
  array_paginas_especial.push(index);
 }
 for (let index = 0; index < page + 1; index++) {
  array_pagina_actual.push(index);
 }
 for (let index = page - 2; index < page + 1; index++) {
  array_pagina_actual_especial.push(index);
 }

 return (
  <div className="buttons">
   { page > 1 
   ?
    <button type="button" onClick={handlePage} data-number={page - 1} className="button activo">&laquo;</button>
   :
    <button type="button" onClick={handlePage} data-number={page - 1} className="button disabled">&laquo;</button>
   }

   { total_paginas <= 5
   ?
    array_paginas.map(pag =>  pag + 1 === page ? <button key={uuidv4()} type="button" onClick={handlePage} className="button activo" data-number={pag + 1}>{pag + 1}</button> : <button type="button" onClick={handlePage} className="button" data-number={pag + 1}>{pag + 1}</button> )
   :
    page <= 3
     ?
     <>
     {array_pagina_actual.map(pag => pag + 1 === page ? <button key={uuidv4()}  type="button" onClick={handlePage} className="button activo" data-number={pag + 1}>{pag + 1}</button> : <button key={uuidv4()} type="button" onClick={handlePage} className="button" data-number={pag + 1}>{pag + 1}</button>)}
     <button type="button" className="button disabled">...</button>
     <button type="button" onClick={handlePage} className="button" data-number={total_paginas}>{total_paginas}</button>
     </>
     :
      page >= total_paginas - 2
      ?
      <>
      <button type="button" onClick={handlePage} className="button" data-number={1}>1</button>
      <button type="button" className="button disabled">...</button>
      {array_paginas_especial.map(pag => pag + 1 === page ? <button key={uuidv4()} type="button" onClick={handlePage} className="button activo" data-number={pag + 1}>{pag + 1}</button> : <button key={uuidv4()} type="button" onClick={handlePage} className="button" data-number={pag + 1}>{pag + 1}</button>)}
      </>
      :
      <>
      <button type="button" onClick={handlePage} className="button" data-number={1}>1</button>
      <button type="button" className="button disabled">...</button>
      {array_pagina_actual_especial.map(pag => pag + 1 === page ? <button key={uuidv4()} type="button" onClick={handlePage} className="button activo" data-number={pag + 1}>{pag + 1}</button> : <button key={uuidv4()} type="button" onClick={handlePage} className="button" data-number={pag + 1}>{pag + 1}</button>)}
      <button type="button" className="button disabled">...</button>
      <button type="button" onClick={handlePage} className="button" data-number={total_paginas}>{total_paginas}</button>
      </>
   }
   { page < total_paginas
   ?
    <button type="button" onClick={handlePage} data-number={page + 1} className="button activo">&raquo;</button>
   :
    <button type="button" onClick={handlePage} data-number={page + 1} className="button disabled">&raquo;</button>
   }
  </div>
 );
}
 
export default ButtonsPage;

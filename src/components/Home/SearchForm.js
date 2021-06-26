import React, {useState} from 'react'

const SearchForm = ({onSubmit: handleSubmitParent}) => {
 const [search, setSearch] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return alert("Por favor rellene el campo a buscar"); 
    handleSubmitParent({search});
 }

 const handleChange = (e) => {
  setSearch(e.target.value.trim());
 }
 return (
  <form action="" onSubmit={handleSubmit}>
     <input type="text" onChange={handleChange}/>
     <button type="submit">Buscar</button>
  </form>
 )
}

export default React.memo(SearchForm)

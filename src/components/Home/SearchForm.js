import React from "react";
import { useLocation } from "wouter";
import useSearch from "../../hooks/useSearch";

const RATINGS = ["g", "pg", "pg-13", "r"];
const SearchForm = ({ initialSearch = "", initialRating = RATINGS[0] }) => {
  const [, setLocation] = useLocation();
  const { search, rating, times, updateSearch, updateRating } = useSearch({
    initialSearch,
    initialRating,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return alert("Por favor rellene el campo a buscar");
    setLocation(
      `${window.location.protocol}//${window.location.host}/search/${search}/${rating}`
    );
  };
  const handleChangeSearch = (e) => {
    updateSearch(e.target.value);
  };
  const handleChangeRating = (e) => {
    updateRating(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChangeSearch}
        placeholder="Search a gif here"
        value={search}  
      />
      <button type="submit">Buscar</button>
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Type of rating</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <p>{times}</p>
    </form>
  );
};

export default React.memo(SearchForm);

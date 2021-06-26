import React, {useEffect, useState} from 'react';
import {getTrendingSearches} from '../../services/gifsTrendingServices'
import Category from '../Home/Category';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingSearches().then(trends => setTrends(trends));
  }, []);

  return (
    <>
    <Category name="Categorías Populares" options={trends}></Category>
    </>
  )
}
export default TrendingSearches;


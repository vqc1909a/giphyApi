
import {API_KEY, API_URL} from './settings';   

export const getTrendingSearches = () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}&limit=10&offset=0`;

    return fetch(apiURL)
          .then(response => response.json()) 
          .then(response => { 
            const {data} = response;
            return data;
          })
}

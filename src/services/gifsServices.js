
import {API_KEY, API_URL} from './settings';

export const getGifs = ({search = "random", page = 1, limit = 10, rating}) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${(page - 1) * limit }&rating=${rating}&lang=en`;

    return fetch(apiURL)
          .then(response => response.json())
          .then(response => {
            const {data, pagination} = response;
            const {total_count} = pagination;
            const gifs = data.map(gif => {
             const {id, title, images} = gif;
             const {url} =  images.fixed_width_small_still; 
             return {
               id, 
               title, 
               url
             }
            });
            return {gifs, total_items: total_count}
          })
}

export default getGifs

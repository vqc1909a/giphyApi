
import {API_KEY, API_URL} from './settings';

export const getGifs = ({search = "random", page = 1, limit = 10}) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${(page - 1) * limit }`;

    return fetch(apiURL)
          .then(response => response.json())
          .then(response => {
            const {data, pagination} = response;
            const {total_count} = pagination;
            const gifs = data.map(gif => {
             const {id, title, images, slug} = gif;
             const {url} =  images.fixed_width_small_still; 
             return {
               id, 
               title, 
               url,
               slug
             }
            });
            return {gifs, total_items: total_count}
          })
}

export default getGifs

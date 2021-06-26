
import {API_KEY, API_URL} from './settings';

export const getGif = ({id}) => {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

    return fetch(apiURL)
          .then(response => response.json())
          .then(({data}) => {
            const {id, title, images} = data;
            const {url} =  images.fixed_width_small_still; 
            return {
               id, 
               title, 
               url
             }
          })
}

export default getGif

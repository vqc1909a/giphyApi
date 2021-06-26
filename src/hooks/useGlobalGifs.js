
import {useContext} from 'react';
import GifsContext from '../context/GifsContext';

const useGlobalGifs = () => {
  const gifs = useContext(GifsContext).gifs;
  const totalItems = useContext(GifsContext).totalItems
  return {gifs, totalItems};
}
 
export default useGlobalGifs;
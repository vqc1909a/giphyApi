import React, {Suspense} from 'react';
import useLazy from '../../hooks/useLazy';
import Spinner from '../Utilities/Spinner';

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrendingSearches = () => {

  //Este e sun hook que me evlua la observación que se hace a un elemento
  const [show, elementRef] = useLazy({distance: 100});

 return (  
  <div ref={elementRef}>
    {show && <Suspense fallback={<Spinner></Spinner>}>
     <TrendingSearches></TrendingSearches>
    </Suspense>}
  </div>
 );
}
 
export default LazyTrendingSearches;
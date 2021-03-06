import React, {Suspense} from 'react';
import './App.css';
import SearchResultView from './views/SearchResultView';
import DetailsGifView from './views/DetailsGifView';
import {Route, Link} from 'wouter'

import {GifsProvider} from './context/GifsContext';

const HomeView = React.lazy(() => import('./views/HomeView'))
function App() {

  return (
      <div className="App">
        <section className="App-content">
          <h1 id="cabecera">
            <Link to="/">
              <img src="/gato.jpg" alt="Gato" />
            </Link> 
          </h1>
          <GifsProvider>
            <Suspense fallback={null}>
              <Route path="/" component={HomeView}></Route>
            </Suspense>
              <Route path="/search/:search/:rating?" component={SearchResultView}></Route>
              <Route path="/gif/:id" component={DetailsGifView}></Route>
              <Route path="/404" component={() =>  <h1>Page Not Found</h1>}></Route>
          </GifsProvider>
        </section>
      </div>
  );
}

export default App;

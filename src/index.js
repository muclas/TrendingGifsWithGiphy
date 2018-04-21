import React from 'react';
import { render } from 'react-dom';
import TrendingGifs from './TrendingGifs';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <h1>Trending GIFs courtesy of the <a href="https://github.com/Giphy/GiphyAPI">Giphy API</a></h1>
    <TrendingGifs />
  </div>
);

render(<App />, document.getElementById('root'));

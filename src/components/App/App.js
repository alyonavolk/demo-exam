import React from 'react';
import Catalog from '../catalog/catalog';
import Header from '../header/header';
import Subscribe from '../subscribe/subscribe';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__content'>
        <Catalog />
        <Subscribe />
      </div>
    </div>
  );
}

export default App;

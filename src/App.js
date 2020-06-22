import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <Menu />
      <Banner />
      <div className="app-container">
        <Home />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <div className="app-container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;

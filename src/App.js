import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ButtonUp/ButtonUp';
import PageInConstruction from './components/PageInConstruction/PageInConstruction';
import Page404 from './components/Page404/Page404';

import Home from './components/Home/Home';
import Cooperation from './components/Cooperation';

function App() {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/help">
          <PageInConstruction />
        </Route>
        <Route path="/stories">
          <PageInConstruction />
        </Route>
        <Route path="/blog">
          <PageInConstruction />
        </Route>
        <Route path="/cooperation" component={Cooperation} />
        <Route path="/login">
          <PageInConstruction />
        </Route>
        <Route path="/pregnancy">
          <PageInConstruction />
        </Route>
        <Route path="/children">
          <PageInConstruction />
        </Route>
        <Route component={Page404} />
      </Switch>

      <Footer />
      <ButtonUp />
    </Router>
  );
}

export default App;

//author: Paweł Uszakow
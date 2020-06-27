import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/help">
          <h2>Gdzie znaleźć pomoc</h2>
        </Route>
        <Route path="/stories">
          <h2>Historie dzieci</h2>
        </Route>
        <Route path="/blog">
          <h2>Tutaj można będzie coś opublikować</h2>
        </Route>
        <Route path="/cooperation">
          <h2>Opcje współpracy</h2>
        </Route>
        <Route path="/login">
          <h2>Strona logowania</h2>
        </Route>
        <Route>
          <h2>Strona 404</h2>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

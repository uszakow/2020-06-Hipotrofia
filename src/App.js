import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ButtonUp/ButtonUp';

import Home from './components/Home/Home';
import LoginPage from './components/LoginPage';

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
          <LoginPage/>
        </Route>
        <Route path="/register">
          <h2>Strona rejestracji</h2>
        </Route>
        <Route path="/logout">
          <h2>Strona wylogowania</h2>
        </Route>
        <Route path="/forgot-password">
          <h2>Strona zmiany hasła</h2>
        </Route>
        <Route path="/pregnancy">
          <h2>Hipotrofia w ciąży</h2>
        </Route>
        <Route path="/children">
          <h2>Hipotrofia u dzieci</h2>
        </Route>
        <Route>
          <h2>Strona 404</h2>
        </Route>
      </Switch>

      <Footer />
      <ButtonUp />
    </Router>
  );
}

export default App;

//author: Paweł Uszakow
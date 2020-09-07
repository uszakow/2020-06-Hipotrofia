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
<<<<<<< HEAD
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
=======
import CooperationPage from './components/Cooperation/Cooperation';
import StoriesPage from './components/Stories/Stories';
>>>>>>> origin/develop

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
          <RegisterPage/>
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
=======

      <div className="app-wrap">
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/help">
            <PageInConstruction />
          </Route>
          <Route path="/stories" component={StoriesPage} />
          <Route path="/blog">
            <PageInConstruction />
          </Route>
          <Route path="/cooperation" component={CooperationPage} />
          <Route path="/login">
            <PageInConstruction />
          </Route>
          <Route path="/pregnancy">
            <PageInConstruction />
          </Route>
          <Route path="/children">
            <PageInConstruction />
          </Route>
          <Route path="/inconstruction">
            <PageInConstruction />
          </Route>
          <Route component={Page404} />
        </Switch>

        <Footer />
        <ButtonUp />
      </div>
    
>>>>>>> origin/develop
    </Router>
  );
}

export default App;

//author: Paweł Uszakow

import React from 'react';
import './App.scss';

import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import ButtonUp from './components/ButtonUp/ButtonUp';
import PageInConstruction from './components/PageInConstruction/PageInConstruction';
import Page404 from './components/Page404/Page404';

import Home from './components/Home/Home';
import CooperationPage from './components/Cooperation/Cooperation';
import StoriesPage from './components/Stories/Stories';
import LoginPage from './components/LoginPage/LoginPage';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <Router>

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
          <Route path="/questions" component={FAQ} />
          <Route path="/login">
            <LoginPage />
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
    
    </Router>
  );
}

export default App;

//author: Paweł Uszakow

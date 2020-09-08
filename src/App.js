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
import QuestionsPage from './components/questions/questions';

import Home from './components/Home/Home';
import CooperationPage from './components/Cooperation/Cooperation';
import StoriesPage from './components/Stories/Stories';

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
          <Route path="/questions" component={QuestionsPage} />
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

import React from "react";
import "./App.scss";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./container/Menu";
import Footer from "./components/Footer/Footer";
import ButtonUp from "./components/ButtonUp/ButtonUp";
import PageInConstruction from "./components/PageInConstruction/PageInConstruction";
import Page404 from "./components/Page404/Page404";

import Home from "./components/Home/Home";
import CooperationPage from "./components/Cooperation/Cooperation";
import StoriesPage from "./components/Stories/Stories";
import LoginPage from "./container/LoginPage";
import ArticlesPage from "./container/ArticlesPage";
import SignUpPage from './components/SignUpPage/SignUpPage';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
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
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/articles" component={ArticlesPage} />
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
      </PersistGate>
    </Provider>
  );
}

export default App;

//author: Paweł Uszakow
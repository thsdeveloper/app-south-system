import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './Route';
import Profile from '../pages/Profile';
import ComicsMarvel from "../pages/ComicsMarvel";
import {ComicProvider} from "../hooks/Comic";
import Authentication from "../pages/Signin/signin";
import ComicDetail from "../pages/ComicDetail";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login"><Authentication/></Route>
      <PrivateRoute path="/profile"><Profile/></PrivateRoute>
      <ComicProvider>
        <PrivateRoute path="/detail/:comic"><ComicDetail/></PrivateRoute>
        <PrivateRoute exact path="/"><ComicsMarvel/></PrivateRoute>
      </ComicProvider>
    </Switch>
  </Router>
);

export default Routes;

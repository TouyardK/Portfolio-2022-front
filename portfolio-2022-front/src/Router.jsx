import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/Components/HomePage/HomePage';
import StartPage from './Components/StartPage/StartPage';

export default function HomeRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    );
  }
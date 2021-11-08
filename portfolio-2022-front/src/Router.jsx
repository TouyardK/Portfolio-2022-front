import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/Components/HomePage/HomePage';
import StartPage from './Components/StartPage/StartPage';
import TouyardK from '../src/Assets/TOUYARD-Kévin.pdf';

export default function HomeRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/pdf" component={TouyardK} />
        </Switch>
      </Router>
    );
  }
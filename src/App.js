import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employee from './employee/pages/Employee'
import Navigation from './component/Navigation/Navigation';

function App() {
  return (
    <Router>
    <Navigation />
      <Switch>
        <Route path="/" exact>
          <Employee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

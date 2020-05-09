import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employee from './employee/pages/Employee'
import EmployeeDetails from './employee/pages/EmployeeDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Employee />
        </Route>
        <Route path="/emp/details" exact>
          <EmployeeDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

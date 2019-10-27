import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './helpers/PrivateRoute'
import LoginForm from './components/LoginForm'
import Analytics from './components/Analytics'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={LoginForm}/>
        <PrivateRoute exact path="/analytics" component={Analytics} />
      </Switch>
    </Router>
  );
}

export default App;

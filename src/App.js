import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Login from './Components/Login';
import Checkout from './Components/Checkout';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/Checkout' component={Checkout} />
      </Router>
    );
  }
}
export default App;


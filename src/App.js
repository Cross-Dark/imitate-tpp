import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './routes/home/home';
import './App.css';
import User from './routes/user/index';
import Detail from './routes/detail/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Home}/> 
          <Route path = "/user" exact component = {User}/> 
          <Route path = "/detail" exact component = {Detail}/> 
        </Switch>
      </BrowserRouter>  
    );
  }
}

export default App;

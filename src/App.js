import React, {useState, useEffect} from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import Home from "./Home"
import Curiosity from './Curiosity';
import './App.css';


function App() {
  return (
    <div className="container">
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/curiosity" render={() => <Curiosity/>}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);

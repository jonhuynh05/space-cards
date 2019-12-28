import React, {useState, useEffect} from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import Home from "./Home"
import './App.css';

function App() {
  return (
    <div className="container">
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);

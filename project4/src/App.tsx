import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={"/"} exact={true} render={() => <HomePage />}/>
        <Route path={"/localisation"} exact={true} render={() => <div>Localisation</div>}/>
        <Route path={"/contact-us"} exact={true} render={() => <div>Contact</div>}/>
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;

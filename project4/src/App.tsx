import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <div>
        <NavLink exact={true} to={"/"}>HomePage</NavLink>
        <NavLink exact={true} to={"/localisation"}>Localisation</NavLink>
        <NavLink exact={true} to={"/contact-us"}>Contact</NavLink>
      </div>
      <Switch>
        <Route path={"/"} exact={true} render={() => <div>HomePage</div>}/>
        <Route path={"/localisation"} exact={true} render={() => <div>Localisation</div>}/>
        <Route path={"/contact-us"} exact={true} render={() => <div>Contact</div>}/>
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;

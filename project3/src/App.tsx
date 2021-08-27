import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Countries from './containers/Countries/Countries';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/*<div className={"row"}>*/}
      {/*  <div className={"col-auto"}><Link to={"/"}>HomePage</Link></div>*/}
      {/*  <div className={"col-auto"}><Link to={"/countries"}>Countries</Link></div>*/}
      {/*</div>*/}
      <Route path={"/"} exact={true} render={() => <h1>React-from-scratch course!</h1>} />
      <Route path={"/countries"} exact={true} render={() => <Countries/>} />
    </BrowserRouter>
  );
}

export default App;

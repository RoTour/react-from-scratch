import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/Errors/Error';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import ContactPage from './containers/ContactPage/ContactPage';
import SearchPage from './containers/SearchPage/SearchPage';

function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={"/"} exact={true} render={() => <HomePage />}/>
        <Route path={"/localisation"} exact={true} render={() => <SearchPage/>}/>
        <Route path={"/contact-us"} render={(props) => <ContactPage {...props} />}/>
        <Route render={() => <Error code={404} alt={"Not Found"} />}/>
      </Switch>
    </BrowserRouter>
  </>;
}

export default App;

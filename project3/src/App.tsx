import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Countries from './containers/Countries/Countries';
import CountryDetails from './containers/Countries/CountryDetails/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Route path={'/'} exact={true} render={() => <h1>React-from-scratch course!</h1>}/>
      <Route path={'/countries'} exact={true} render={(props) => {
        return <Countries path={props.match.url}/>;
      }}/>
      <Route path={'/countries/:id'} exact={true} render={
        (props) => <CountryDetails countryName={props.match.params.id}/>
      }
      />
    </BrowserRouter>
  );
}

export default App;

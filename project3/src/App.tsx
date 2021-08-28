import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/Errors/Error';
import Error404 from './components/Errors/Error404/Error404';
import Navbar from './components/Navbar/Navbar';
import Countries from './containers/Countries/Countries';
import CountryDetails from './containers/Countries/CountryDetails/CountryDetails';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={'/'} exact={true} render={() => <h1>React-from-scratch course!</h1>}/>
        <Route path={'/countries'} exact={true} render={(props) => {
          return <div className={"mt-3"}><Countries path={props.match.url}/></div>;
        }}/>
        <Route path={'/countries/:id'} exact={true} render={
          (props) => <CountryDetails countryName={props.match.params.id}/>
        }
        />
        <Route render={() => <Error code={404}><Error404/></Error>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

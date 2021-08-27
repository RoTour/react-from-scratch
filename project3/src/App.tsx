import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Countries from './containers/Countries/Countries';

function App() {
  return <>
    <Title/>
    <div className={"container"}>
      <Countries/>
    </div>
  </>;
}

export default App;

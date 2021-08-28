import React, { FC, useState } from 'react';
import ContinentFilter from './ContinentFilter/ContinentFilter';
import CountryList from './CountryList/CountryList';

type CountriesProps = {
  path: string
}

const Countries: FC<CountriesProps> = (props) => {
  console.log("Countries props:", props);
  const [filter, setFilter] = useState<string>("all");
  return <>
    <div className={"container"}>
      <ContinentFilter currentFilter={filter} setFilter={setFilter}/>
      <CountryList filter={filter} path={props.path} />
    </div>
  </>

};

export default Countries;

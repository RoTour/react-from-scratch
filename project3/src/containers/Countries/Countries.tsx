import React, { FC, useState } from 'react';
import Title from '../../components/Title/Title';
import ContinentFilter from './ContinentFilter/ContinentFilter';
import CountryList from './CountryList/CountryList';

type CountriesProps = {}

const Countries: FC<CountriesProps> = () => {
  const [filter, setFilter] = useState<string>("all");
  return <>
    <Title/>
    <div className={"container"}>
      <ContinentFilter currentFilter={filter} setFilter={setFilter}/>
      <CountryList filter={filter} />
    </div>
  </>

};

export default Countries;

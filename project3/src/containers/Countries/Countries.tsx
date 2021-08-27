import { FC, useState } from 'react';
import ContinentFilter from './ContinentFilter/ContinentFilter';
import CountryList from './CountryList/CountryList';

type CountriesProps = {}

const Countries: FC<CountriesProps> = () => {
  const [filter, setFilter] = useState<string>("all");
  return <>
    <ContinentFilter setFilter={setFilter}/>
    <CountryList filter={filter} />
  </>;
};

export default Countries;

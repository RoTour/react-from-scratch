import { FC } from 'react';
import ContinentFilter from './ContinentFilter/ContinentFilter';

type CountriesProps = {}

const Countries: FC<CountriesProps> = () => {
  return <>
    <ContinentFilter/>
    <div>Country List</div>
    <div>Pagination</div>
  </>;
};

export default Countries;

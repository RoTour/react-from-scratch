import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import Pagination from '../Pagination/Pagination';

type CountryListProps = {
  filter: string,
}

export type CountryData = {
  flagUrl: string,
  capital: string,
  region: string,
  name: string,
}

const CountryList: FC<CountryListProps> = (props) => {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [visibleCountries, setVisibleCountries] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/${props.filter}?fields=name;capital;region;flag`;
    setLoading(true);
    axios.get(url)
      .then(({ data }: { data: any[] }) => {
        const newCountries = data.map(({ name, capital, flag, region }) => ({ name, capital, region, flagUrl: flag }));
        console.log(newCountries);
        setCountries(newCountries);
        console.log(countries);
        setVisibleCountries(newCountries.slice(0, 10));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [props.filter]);


  return <>
    <div className={'row mt-5'}>
      {}
      {loading
        ? <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        : visibleCountries.map((it, index) => <CountryCard key={index} countryData={it}/>)}
    </div>
    <Pagination nbResult={countries.length} countries={countries} setVisibleCountries={setVisibleCountries} />
  </>;
};

export default CountryList;

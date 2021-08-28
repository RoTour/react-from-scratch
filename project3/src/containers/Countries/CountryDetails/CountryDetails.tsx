import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { CountryData } from '../CountryList/CountryList';

type CountryDetailsProps = {
  countryName: string,
}

const CountryDetails: FC<CountryDetailsProps> = (props) => {
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://restcountries.eu/rest/v2/name/${props.countryName}`)
      .then(({data}) => {
        setCountryData({...data[0], flagUrl: data[0].flag})
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }, [props.countryName])

  return <>
    {!loading && countryData && <div className={"container"}>
        <h2 className={"mt-4 mb-4 text-center fw-bolder fs-1"}>{countryData.name}</h2>
        <CountryCard countryData={countryData} />
    </div>}
  </>;
};

export default CountryDetails;

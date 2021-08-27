import { FC } from 'react';
import { CountryData } from '../CountryList/CountryList';

type CountryCardProps = {
  countryData: CountryData
}

const CountryCard: FC<CountryCardProps> = (props) => {
  return <>
    <div className={'col-6'}>
      <div className={"row"}>
        <div className={"col-3"}>
          <img src={props.countryData.flagUrl} alt={"flag"} className={"col-12"}/>
        </div>
        <div className={"col"}>
          <div className={"col-12"}>
            <h3>{props.countryData.name}</h3>
            <p>Capital: {props.countryData.capital}</p>
            <p>Region: {props.countryData.region}</p>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default CountryCard;

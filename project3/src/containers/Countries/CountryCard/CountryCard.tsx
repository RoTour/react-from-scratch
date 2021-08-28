import { FC } from 'react';
import { CountryData } from '../CountryList/CountryList';
import { Link } from 'react-router-dom';

type CountryCardProps = {
  countryData: CountryData,
  path?: string,
};

const CountryCard: FC<CountryCardProps> = (props) => {
  return <>
    <Link to={`${props.path}/${props.countryData.name}`} className={'col-6'}
          onClick={(event) => {if (!props.path) event.preventDefault()}} >
      <div className={"row mb-3"}>
        <div className={"col-3"}>
          <img src={props.countryData.flagUrl} alt={"flag"} className={"col-12"}/>
        </div>
        <div className={"col"}>
          <div className={"col-12"}>
            <h3 className={"m-0"}>{props.countryData.name}</h3>
            <p className={"m-0"}>Capital: {props.countryData.capital}</p>
            <p className={"m-0"}>Region: {props.countryData.region}</p>
          </div>
        </div>
      </div>
    </Link>
  </>;
};

export default CountryCard;

import { FC } from 'react';
import Button from '../../../components/Button/Button';

type ContinentFilterProps = {
  setFilter: (newFilter: string) => void,
}

const ContinentFilter: FC<ContinentFilterProps> = (props) => {
  return <>
    <div className={"col text-center"}>
      <Button onClick={() => props.setFilter("all")}>All</Button>
      <Button onClick={() => props.setFilter("region/europe")}>Europe</Button>
      <Button onClick={() => props.setFilter("region/africa")}>Africa</Button>
      <Button onClick={() => props.setFilter("region/asia")}>Asia</Button>
      <Button onClick={() => props.setFilter("region/americas")}>America</Button>
      <Button onClick={() => props.setFilter("region/oceania")}>Oceania</Button>
    </div>
  </>;
};

export default ContinentFilter;

import { FC } from 'react';
import Button from '../../../components/Button/Button';

type ContinentFilterProps = {
  setFilter: (newFilter: string) => void,
  currentFilter: string,
}

const ContinentFilter: FC<ContinentFilterProps> = (props) => {
  return <>
    <div className={"col text-center"}>
      <Button onClick={() => props.setFilter("all")} addClassName={`${props.currentFilter === 'all' && "disabled"}`}>All</Button>
      <Button onClick={() => props.setFilter("region/europe")} addClassName={`${props.currentFilter === 'region/europe' && "disabled"}`}>Europe</Button>
      <Button onClick={() => props.setFilter("region/africa")} addClassName={`${props.currentFilter === 'region/africa' && "disabled"}`}>Africa</Button>
      <Button onClick={() => props.setFilter("region/asia")} addClassName={`${props.currentFilter === 'region/asia' && "disabled"}`}>Asia</Button>
      <Button onClick={() => props.setFilter("region/americas")} addClassName={`${props.currentFilter === 'region/americas' && "disabled"}`}>America</Button>
      <Button onClick={() => props.setFilter("region/oceania")} addClassName={`${props.currentFilter === 'region/oceania' && "disabled"}`}>Oceania</Button>
    </div>
  </>;
};

export default ContinentFilter;

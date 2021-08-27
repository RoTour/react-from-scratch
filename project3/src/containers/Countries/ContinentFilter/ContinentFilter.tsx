import { FC } from 'react';
import Button from '../../../components/Button/Button';

type ContinentFilterProps = {}

const ContinentFilter: FC<ContinentFilterProps> = () => {
  return <>
    <div className={"col text-center"}>
      <Button onClick={() => null}>All</Button>
      <Button onClick={() => null}>Europe</Button>
      <Button onClick={() => null}>Africa</Button>
      <Button onClick={() => null}>Asia</Button>
      <Button onClick={() => null}>America</Button>
      <Button onClick={() => null}>Oceania</Button>
    </div>
  </>;
};

export default ContinentFilter;

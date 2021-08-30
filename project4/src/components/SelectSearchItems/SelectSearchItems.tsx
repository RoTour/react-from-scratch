import { FC } from 'react';

type SelectSearchItemsProps = {
  apiItems: {
    policeStation: string,
    cityHall: string,
    jobCenter: string,
    prefecture: string,
  },
  setFilterFn: (newFilter: string) => void
}

const SelectSearchItems: FC<SelectSearchItemsProps> = (props) => {
  return <>
    <button type="button" className="btn btn-success" onClick={() => props.setFilterFn(props.apiItems.cityHall)}>Mairie</button>
    <button type="button" className="btn btn-success" onClick={() => props.setFilterFn(props.apiItems.policeStation)}>Commissariat de police</button>
    <button type="button" className="btn btn-success" onClick={() => props.setFilterFn(props.apiItems.jobCenter)}>Pole Emploi</button>
    <button type="button" className="btn btn-success" onClick={() => props.setFilterFn(props.apiItems.prefecture)}>Préfecture</button>
  </>;
};

export default SelectSearchItems;

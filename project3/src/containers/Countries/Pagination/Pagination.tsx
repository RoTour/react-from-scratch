import { FC } from 'react';
import Button from '../../../components/Button/Button';
import { CountryData } from '../CountryList/CountryList';

type PaginationProps = {
  nbResult: number,
  countries: CountryData[],
  setVisibleCountries: (data: CountryData[]) => void,
}

const Pagination: FC<PaginationProps> = (props) => {

  const paginate = (newPage: number) => {
    props.setVisibleCountries(props.countries.slice((newPage - 1) * 10, ((newPage - 1) + 1) * 10));
  };

  return <>
    <div>
      {new Array(Math.ceil(props.countries.length/10)).fill(undefined).map((_, i) => i + 1).map((pageIndex) =>
        <Button key={pageIndex} onClick={() => paginate(pageIndex)}>{pageIndex}</Button>
      )}
    </div>
  </>;
};

export default Pagination;

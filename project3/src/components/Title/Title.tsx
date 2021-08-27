import { FC } from 'react';

type TitleProps = {}

const Title: FC<TitleProps> = () => {
  return <>
    <h1 className={"col text-center bg-info text-white p-3"}>Countries List</h1>
  </>;
};

export default Title;

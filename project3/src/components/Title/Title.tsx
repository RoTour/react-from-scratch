import { FC } from 'react';

type TitleProps = {}

const Title: FC<TitleProps> = (props) => {
  return <>
    <h1 className={"col text-center bg-info text-white p-3"}>{props.children}</h1>
  </>;
};

export default Title;

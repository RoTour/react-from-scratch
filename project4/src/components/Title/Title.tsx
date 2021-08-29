import { FC } from 'react';

type TitleProps = {
  className?: string
}

const Title: FC<TitleProps> = (props) => {
  return <>
    <h1 className={`bg-success p-3 text-white ${props.className}`}>{props.children}</h1>
  </>;
};

export default Title;

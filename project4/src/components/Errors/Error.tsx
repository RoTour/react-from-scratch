import { FC } from 'react';

type Error404Props = {
  code: number,
  alt: string,
}

const Error: FC<Error404Props> = (props) => {
  return <div className={"container d-flex justify-content-center"}>
    <img src={`https://http.cat/${props.code}`} alt={props.alt}/>
  </div>;
};

export default Error;

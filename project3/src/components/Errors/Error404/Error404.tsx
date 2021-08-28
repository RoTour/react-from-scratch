import { FC } from 'react';

type Error404Props = {}

const Error404: FC<Error404Props> = () => {
  return <img src={"https://http.cat/404"} alt={"Page not found"} height={500}/>;
};

export default Error404;

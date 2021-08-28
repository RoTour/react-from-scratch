import { FC } from 'react';

type ErrorProps = {
  code: number,
}

const Error: FC<ErrorProps> = (props) => {
  return <div className="alert alert-dismissible alert-danger h-100">
    <div className={"offset-3 col-6"}>
      {props.children}
    </div>
  </div>;
};

export default Error;

import { FC } from 'react';

type ButtonProps = {
  onClick: () => void,
}

const Button: FC<ButtonProps> = (props) => {
  return <>
    <button type={"button"} className={"btn btn-primary"} onClick={props.onClick}>{props.children}</button>
  </>;
};

export default Button;

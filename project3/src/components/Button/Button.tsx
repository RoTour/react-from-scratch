import { FC } from 'react';

type ButtonProps = {
  onClick: () => void,
  addClassName?: string
}

const Button: FC<ButtonProps> = (props) => {
  return <>
    <button type={"button"} className={`btn btn-primary ${props.addClassName}`} onClick={props.onClick}>{props.children}</button>
  </>;
};

export default Button;

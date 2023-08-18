import "./Button.css";
import { ButtonProps } from "../../../types/types";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button type="button" className="SharedButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

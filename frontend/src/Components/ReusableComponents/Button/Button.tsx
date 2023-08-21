import "./Button.css";
import { ButtonProps } from "../../../types/types";

const Button = ({ text, backgroundColor, onClick }: ButtonProps) => {

  const buttonCustomStyle = {
    backgroundColor: backgroundColor, 
  };

  return (
    <button 
      type="button" 
      className="SharedButton" 
      style={buttonCustomStyle}
      
      onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;

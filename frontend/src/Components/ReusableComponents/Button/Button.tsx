import "./Button.css";
import { ButtonProps } from "../../../types/types";

const Button = ({ text, backgroundColor, icon, onClick }: ButtonProps) => {

  const buttonCustomStyle = {
    backgroundColor: backgroundColor, 
  };

  return (
    <button 
      type="button" 
      className="SharedButton" 
      style={buttonCustomStyle}
      
      onClick={onClick}>
        {text}{icon && <img className="ButtonIcon" src={icon} alt="" />}
    </button>
  );
};

export default Button;

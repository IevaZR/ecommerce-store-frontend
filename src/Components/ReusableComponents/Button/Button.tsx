import './Button.css';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
}

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button 
      className='SharedButton'
      onClick={onClick}
    >
      {text}

    </button>
  )
}

export default Button
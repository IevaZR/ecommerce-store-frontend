import './Button.css';

interface ButtonProps {
    text?: string;
    // buttonColor?: '#817F77' | '#FFCD2B';
}

const Button = ({text}: ButtonProps) => {
  return (
    <div className='SharedButton'>
        {text}

    </div>
  )
}

export default Button
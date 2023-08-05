import './Button.css';
import {ButtonProps} from '../../../types/types'

const Button = ({text}: ButtonProps) => {
  return (
    <div className='SharedButton'>
        {text}

    </div>
  )
}

export default Button
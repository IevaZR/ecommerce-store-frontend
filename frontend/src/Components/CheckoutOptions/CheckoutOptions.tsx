import { useNavigate } from 'react-router-dom';
import Button from '../ReusableComponents/Button/Button';
import './CheckoutOptions.css';

const CheckoutOptions = () => {
    const navigate = useNavigate();

    const handleGoToUserLogin = () => {
        navigate('/user-login');
    }

  return (
        <div className="CheckoutOptionsContainer">
            <div className="CheckoutOptionsTitle">
                <h3>Login to account</h3>
                <p>If you already have an ACCENT account,
                    you can login to it now, and use your 
                    stored details. 
                </p>
            </div>
                <Button
                    text='Login' 
                    onClick={handleGoToUserLogin}
                />
        </div>
    
  )
}

export default CheckoutOptions
import Checkout from '../../Components/Checkout/Checkout';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className='CheckoutPageWrapper'>
        <Header />
        <Checkout></Checkout>
        <Footer/>
    </div>
  )
}

export default CheckoutPage
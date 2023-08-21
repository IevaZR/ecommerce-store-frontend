import './ShoppingCart.css';
import Button from '../ReusableComponents/Button/Button';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCart = () => {
  return (
    <div className="ShoppingCartWrapper">
      <h2 className='ShoppingCartHeading'>Your cart</h2>
      <div className="ShoppingCartBody">
        <table className='ShoppingCartContent'>
          <tbody>
            <ShoppingCartItem/>
          </tbody>
        </table>
        <div className="ShoppingCartSummaryContainer">
          <div className="ShoppingCartSummaryContainerTitle">Total:</div>
          <div className="ShoppingCartSummaryContainerValue">&euro; 6263.65</div>
        </div>
        <div className="ShoppingCartButtonsContainer">
          <Button
            text='Continue Shopping' 
            // onClick={}
          ></Button>
          <Button
            text='Checkout' 
            backgroundColor='rgb(209 203 203 / 75%)'
            // onClick={}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
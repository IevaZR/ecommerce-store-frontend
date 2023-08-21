import Header from "../../Components/Header/Header";
import "./CartPage.css";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import Footer from "../../Components/Footer/Footer";

const CartPage = () => {
  return (
    <div className="CartPageWrapper">
        <Header/>
        <ShoppingCart/>
        <Footer/>
    </div>
  )
}

export default CartPage
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { ActiveSearchProvider } from "./HelperFunctions/ActiveSearchContext";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import CartPage from "./Pages/CartPage/CartPage";
import AdminLoginPage from "./Pages/AdminLoginPage/AdminLoginPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import ScrollToTopOnNavigate from "./Components/ScrollToTopOnNavigate/ScrollToTopOnNavigate";

function App() {
  return (
    <div>
      <ActiveSearchProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
        <ScrollToTopOnNavigate />
      </ActiveSearchProvider>
    </div>
  );
}

export default App;

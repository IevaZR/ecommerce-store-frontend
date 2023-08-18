import "./AdminPage.css";
import AdminProductList from "../../Components/AdminProductList/AdminProductList";
import AdminPageHeading from "../../Components/AdminPageHeading/AdminPageHeading";
import AdminPageAddProduct from "../../Components/AdminPageAddProduct/AdminPageAddProduct";
import { AddProductVisibilityProvider } from "../../HelperFunctions/AddProductVisibilityContext";

const AdminPage = () => {
  return (
    <AddProductVisibilityProvider>
      <div className="AdminPageWrapper">
        <AdminPageHeading />
        <AdminPageAddProduct />
        <AdminProductList />
      </div>
    </AddProductVisibilityProvider>
  );
};

export default AdminPage;

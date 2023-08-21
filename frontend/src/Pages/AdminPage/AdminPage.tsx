import "./AdminPage.css";
import AdminProductList from "../../Components/AdminProductList/AdminProductList";
import AdminPageHeading from "../../Components/AdminPageHeading/AdminPageHeading";
import AdminPageAddProduct from "../../Components/AdminPageAddProduct/AdminPageAddProduct";
import { AddProductVisibilityProvider } from "../../HelperFunctions/AddProductVisibilityContext";
import { EditProductProvider } from "../../HelperFunctions/EditProductContext";
import { EditProductVisibilityProvider } from "../../HelperFunctions/EditProductVisibilityContext";
import AdminPageEditProduct from "../../Components/AdminPageEditProduct/AdminPageEditProduct";

const AdminPage = () => {
  return (
    <AddProductVisibilityProvider>
      <EditProductVisibilityProvider>
        <EditProductProvider>
          <div className="AdminPageWrapper">
            <AdminPageHeading />
            <AdminPageAddProduct />
            <AdminPageEditProduct/>
            <AdminProductList />
          </div>
        </EditProductProvider>
      </EditProductVisibilityProvider>
    </AddProductVisibilityProvider>
  );
};

export default AdminPage;

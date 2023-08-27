import "./AdminPage.css";
import AdminProductList from "../../Components/AdminProductList/AdminProductList";
import AdminPageHeading from "../../Components/AdminPageHeading/AdminPageHeading";
import AdminPageAddProduct from "../../Components/AdminPageAddProduct/AdminPageAddProduct";
import { AddProductVisibilityProvider } from "../../HelperFunctions/AddProductVisibilityContext";
import { EditProductProvider } from "../../HelperFunctions/EditProductContext";
import { EditProductVisibilityProvider } from "../../HelperFunctions/EditProductVisibilityContext";
import AdminPageEditProduct from "../../Components/AdminPageEditProduct/AdminPageEditProduct";
import AdminPageSideBar from "../../Components/AdminPageSideBar/AdminPageSideBar";
import AdminPageOrderList from "../../Components/AdminPageOrderList/AdminPageOrderList";
import { OrderFilterProvider } from "../../HelperFunctions/OrderFilterContext";
import { AdminVisibleContentProvider } from "../../HelperFunctions/AdminVisibleContentContext";

const AdminPage = () => {
  return (
    <AddProductVisibilityProvider>
      <EditProductVisibilityProvider>
        <EditProductProvider>
          <OrderFilterProvider>
            <AdminVisibleContentProvider>
              <div className="AdminPageWrapper">
                <div className="AdminPageSideSectionWrapper">
                  <AdminPageSideBar />
                </div>
                <div className="AdminPageMainSectionWrapper">
                  <AdminPageHeading />
                  <AdminPageAddProduct />
                  <AdminPageEditProduct />
                  <AdminProductList />
                  <AdminPageOrderList />
                </div>
              </div>
            </AdminVisibleContentProvider>
          </OrderFilterProvider>
        </EditProductProvider>
      </EditProductVisibilityProvider>
    </AddProductVisibilityProvider>
  );
};

export default AdminPage;

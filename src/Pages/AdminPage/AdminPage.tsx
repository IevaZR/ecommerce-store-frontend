import "./AdminPage.css";
import AdminProductList from "../../Components/AdminProductList/AdminProductList";
import AdminPageHeading from "../../Components/AdminPageHeading/AdminPageHeading";
import AdminPageAddProduct from "../../Components/AdminPageAddProduct/AdminPageAddProduct";

const AdminPage = () => {
  return (
    <div className="AdminPageWrapper">
      <AdminPageHeading/>
      {/* <AdminPageAddProduct/> */}
      <AdminProductList />
    </div>
  );
};

export default AdminPage;

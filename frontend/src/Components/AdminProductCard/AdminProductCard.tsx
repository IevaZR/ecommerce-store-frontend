import "./AdminProductCard.css";
// @ts-ignore
import EditIcon from "./../../Assets/edit-icon.png";
// @ts-ignore
import DeletIcon from "./../../Assets/delete-icon.png";
import { useEditProduct } from "../../HelperFunctions/EditProductContext";
import { useEditProductVisibility } from "../../HelperFunctions/EditProductVisibilityContext";

const AdminProductCard = ({ product, onDelete }) => {
  const { editingProduct, setEditingProduct } = useEditProduct();
  const { toggleEditProductVisible } = useEditProductVisibility();

  const deleteProduct = () => {
    onDelete(product.id);
  };

  const editProduct = () => {
    setEditingProduct(product);
    toggleEditProductVisible(true);
  };

  const lowOnStock = () => {
    if (product.quantity <= 3) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="AdminProductCardWrapper">
      <div className="AdminProductCardImageWrapper">
        <img src={product.image} alt="" className="AdminProdcutCardImage" />
      </div>
      <div className="AdminProductCardTitle">{product.title}</div>
      <div className="AdminProductCardCategory">{product.category}</div>
      <div className="AdminProductCardPrice">€{product.price}</div>
      <div className="AdminProductCardQuantity">
        <p>{product.quantity}</p>
        {
          lowOnStock() && (
            <div className="AdminProductCardLowOnStock">!</div>
          )
        }
      </div>

      <div>
        <button className="AdminProductCardButton" onClick={editProduct}>
          <img
            src={EditIcon}
            alt="edit-icon"
            className="AdminProductCardButtonImage"
          />
        </button>
        <button className="AdminProductCardButton" onClick={deleteProduct}>
          <img
            src={DeletIcon}
            alt="delete-icon"
            className="AdminProductCardButtonImage"
          />
        </button>
      </div>
    </div>
  );
};

export default AdminProductCard;

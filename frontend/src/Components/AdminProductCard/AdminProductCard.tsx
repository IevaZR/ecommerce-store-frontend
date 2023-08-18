import "./AdminProductCard.css";
// @ts-ignore
import EditIcon from "./../../Assets/edit-icon.png"
// @ts-ignore
import DeletIcon from "./../../Assets/delete-icon.png"

const AdminProductCard = ({product}) => {
  return (
    <div className="AdminProductCardWrapper">
      
      <div className="AdminProductCardImageWrapper">
        <img
          src={product.image}
          alt=""
          className="AdminProdcutCardImage"
        />
      </div>
      <div className="AdminProductCardTitle">{product.title}</div>
      <div className="AdminProductCardCategory">{product.category}</div>
      <div className="AdminProductCardPrice">€{product.price}</div>
      <div className="AdminProductCardQuantity">{product.quantity}</div>
      <div>
        <button className="AdminProductCardButton"><img src={EditIcon} alt="edit-icon" className="AdminProductCardButtonImage"/></button>
        <button className="AdminProductCardButton"><img src={DeletIcon} alt="delete-icon" className="AdminProductCardButtonImage"/></button>
      </div>
    </div>
  );
};

export default AdminProductCard;

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
          src="https://p3.aprimocdn.net/boconcept/fb1336ab-4b34-46a9-a23c-ae3000c41c04/1685500_WEB-FeatureLeftOrRightAlign-D-1300x1100.jpg"
          alt=""
          className="AdminProdcutCardImage"
        />
      </div>
      <div className="AdminProductCardTitle">Green sofa</div>
      <div className="AdminProductCardCategory">sofa</div>
      <div className="AdminProductCardPrice">238.00</div>
      <div className="AdminProductCardQuantity">3</div>
      <div>
        <button className="AdminProductCardButton"><img src={EditIcon} alt="edit-icon" className="AdminProductCardButtonImage"/></button>
        <button className="AdminProductCardButton"><img src={DeletIcon} alt="delete-icon" className="AdminProductCardButtonImage"/></button>
      </div>
    </div>
  );
};

export default AdminProductCard;

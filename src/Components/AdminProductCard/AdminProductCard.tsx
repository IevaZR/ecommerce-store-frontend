import "./AdminProductCard.css"

const AdminProductCard = ({product}) => {
    
  return (
    <div className="AdminProductCardWrapper">
        <div className="AdminProductCardImageWrapper"><img src="" alt="" className="AdminProdcutCardImage" /></div>
        <div className="AdminProductCardTitle">Green sofa</div>
        <div className="AdminProductCardCategory">sofa</div>  
        <div className="AdminProductCardPrice">238.00</div>
        <div className="AdminProductCardQuantity">3</div>
        
            
    </div>
  )
}

export default AdminProductCard
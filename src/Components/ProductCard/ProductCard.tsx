import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className='ProductCardWrapper'>
        <div className="ProductImageContainer">
            <img 
                src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f9383a1/images/2050000/2052276.jpg?sw=1200" 
                alt="product img" 
            />
        </div>
        <div className="ProductDataContainer">
            <div className="ProductName">Stylish sofa</div>
            <div className="ProductPrice">650 EUR</div>
        </div>
        <button className='ProductCardQuickviewButton'>Quickview</button>
    </div>
  )
}

export default ProductCard
import './ProductCard.css';
import {Furniture} from '../../types/types';
// import Button from '../ReusableComponents/Button/Button';
interface ProductCardProps {
    productList: Furniture;
}

const ProductCard = ({productList}: ProductCardProps) => (
    <div className='ProductCardWrapper'>
        <div className="ProductImageContainer">
            <img
                src={productList.image}
                alt="product img" />
        </div>
        <div className="ProductDataContainer">
            <div className="ProductName">
                {productList.title}
            </div>
            <div className="ProductPrice">
                {productList.price} EUR
            </div>
        </div>
        {/* <Button text='View' /> */}
        <button className='ProductCardQuickviewButton'>Quickview</button>
    </div>
)

export default ProductCard
import ProductCard from '../ProductCard/ProductCard';
import './ProducrList.css';

const ProductList = () => {
  return (
    <div className='ProductListWrapper' id="ProductListWrapper">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList
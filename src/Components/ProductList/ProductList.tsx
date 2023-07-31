import ProductCard from '../ProductCard/ProductCard';
import './ProducrList.css';
import {FurnitureData} from '../../data/data';
import { useState } from 'react';



const ProductList = () => {

    const [products, setProducts] = useState(FurnitureData);
    // console.log(products);
    const [visibleProducts, setVisibleProducts] = useState(8);

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
    };

    const productsToShow = products.slice(0, visibleProducts);

  return (
    <div className='ProductListWrapper'>
        <div className="ProductListContent">
            {productsToShow.map((product) => (
                <ProductCard key={product.id} productList={product} />
            ))}
        </div>
        {visibleProducts < products.length && (
            <button onClick={handleLoadMore} className='LoadMoreButton'>
                Load More
            </button>
        )}
    </div>
  )
}

export default ProductList
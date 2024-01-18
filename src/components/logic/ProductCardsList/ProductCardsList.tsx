import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductCardsList.module.css'

interface IProductCardsList {
    products: any;
}

const ProductCardList:React.FC<IProductCardsList> = ({products}) => {
    return (
        <div
            className={classes.ProductCardsList}
        >
            {products.map((product:any) =>
                <ProductCard
                    key={product.productId}
                    product = {product}
                />
            )}
        </div>
    )
}

export default ProductCardList;
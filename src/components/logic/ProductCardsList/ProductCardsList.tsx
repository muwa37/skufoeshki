import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductCardsList.module.css'
import ProductAdder from '../ProductAdder/ProductAdder'
import { IProduct } from '../../../types/types';


interface IProductCardsList {
    products: IProduct[];
}

const ProductCardList:React.FC<IProductCardsList> = ({products}) => {
    return (
        <div
            className={classes.ProductCardsList}
        >
            {products.map((product:IProduct) =>
                <div
                    className={classes.ProductCardContainer}
                    key={product.productId}
                >
                    <ProductCard
                        key={product.productId + 1}
                        product = {product}
                    />
                    <ProductAdder
                        key={product.productId + 2}
                        product={product}
                    />
                </div>
            )}
        </div>
    )
}

export default ProductCardList;
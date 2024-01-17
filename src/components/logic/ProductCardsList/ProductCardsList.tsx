import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardList = () => {
    return (
        <div>
            <ProductCard
                props='1337'
                card='228'
            />
            <ProductCard
                props='1337'
                card='228'
            />
            <ProductCard
                props='1337'
                card='228'
            />
        </div>
    )
}

export default ProductCardList;
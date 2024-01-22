import React from 'react';
import {useNavigate} from 'react-router-dom';
import { IProduct } from '../../../types/types';
import classes from './ProductCard.module.css'

interface IProps {
    props?: any
    product?: any
}

const ProductCard:React.FC<IProps> = (props:IProps) => {
    const router = useNavigate();

    return (
        <div
            className={classes.ProductCard}
            onClick={() => {
                router(`/products/${props?.product?.productId}`)
            }}
        >
            <div
                className={classes.ProductCardContent}
            >
                <div
                    className={classes.ProductCardImg}
                >
                    {props?.product?.productImg}
                </div>
                <div
                    className={classes.ProductCardName}
                >
                    {props?.product?.productTitle}
                </div>
                <div
                    className={classes.ProductCardPrice}
                >
                    $ {props?.product?.productPrice}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
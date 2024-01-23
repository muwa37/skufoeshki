import React from 'react';
import {useNavigate} from 'react-router-dom';
import classes from './ProductCard.module.css'

interface IProps {
    props?: any
    product?: any
}

const ProductCard:React.FC<IProps> = (props:IProps) => {
    const router = useNavigate();
    const imgLink = '../../../assets/images/products/Beerka.png'

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
                    <img 
                        src={require(imgLink)}
                        alt={props?.product?.productId} 
                    />
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
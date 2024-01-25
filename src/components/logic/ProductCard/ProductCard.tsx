import React from 'react';
import {useNavigate} from 'react-router-dom';
import classes from './ProductCard.module.css'

import Arahis from '../../../assets/images/products/Arahis.png'
import Beerka from '../../../assets/images/products/Beerka.png'
import Doritos from '../../../assets/images/products/Doritos.png'
import Kireeshki from '../../../assets/images/products/Kireeshki.png'
import Pringles from '../../../assets/images/products/Pringles.png'
import Semki from '../../../assets/images/products/Semki.png'
import Shipuchki from '../../../assets/images/products/Shipuchki.png'
import Sirceedi from '../../../assets/images/products/Sirceedi.png'
import SirColbas from '../../../assets/images/products/SirColbas.png'

interface IProps {
    props?: any
    product?: any
}

const ProductCard:React.FC<IProps> = (props:IProps) => {
    const router = useNavigate();
    const imgSrc = props.product.productImg === 'Arahis'
        ? Arahis 
        : props.product.productImg === 'Beerka' ? Beerka
        : props.product.productImg === 'Doritos' ? Doritos
        : props.product.productImg === 'Kireeshki' ? Kireeshki
        : props.product.productImg === 'Pringles' ? Pringles
        : props.product.productImg === 'Semki' ? Semki
        : props.product.productImg === 'Shipuchki' ? Shipuchki
        : props.product.productImg === 'Sirceedi' ? Sirceedi
        : props.product.productImg === 'SirColbas' ? SirColbas
        : undefined

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
                    <img
                        className={classes.ProductCardImg} 
                        src={imgSrc}
                        alt={props?.product?.productTitle} 
                    />
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
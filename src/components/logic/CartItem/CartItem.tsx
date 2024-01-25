import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../../context/CartProvider';
import { ICartItem } from '../../../types/types';

import classes from './CartItem.module.css'

import AmountBtns from '../AmountBtns/AmountBtns';
import CustomBtn from "../../ui/CustomBtn/CustomBtn";

import Arahis from '../../../assets/images/products/Arahis.png'
import Beerka from '../../../assets/images/products/Beerka.png'
import Doritos from '../../../assets/images/products/Doritos.png'
import Kireeshki from '../../../assets/images/products/Kireeshki.png'
import Pringles from '../../../assets/images/products/Pringles.png'
import Semki from '../../../assets/images/products/Semki.png'
import Shipuchki from '../../../assets/images/products/Shipuchki.png'
import Sirceedi from '../../../assets/images/products/Sirceedi.png'
import SirColbas from '../../../assets/images/products/SirColbas.png'

const CartItem:React.FC<ICartItem> = ({ productTitle, productPrice, amount, productId, productImg }:ICartItem) => {
    const { toggleAmount, removeItem }:any = useCartContext();
  
    const increase = ():void => {
        toggleAmount(productId, "inc");
    };
    const decrease = ():void => {
        toggleAmount(productId, "dec");
    };

    const imgSrc = productImg === 'Arahis'
        ? Arahis 
        : productImg === 'Beerka' ? Beerka
        : productImg === 'Doritos' ? Doritos
        : productImg === 'Kireeshki' ? Kireeshki
        : productImg === 'Pringles' ? Pringles
        : productImg === 'Semki' ? Semki
        : productImg === 'Shipuchki' ? Shipuchki
        : productImg === 'Sirceedi' ? Sirceedi
        : productImg === 'SirColbas' ? SirColbas
        : undefined

    return (
        <div
            className={classes.CartItemContent}
        >
                <img 
                    className={classes.CartItemImg}
                    src={imgSrc} 
                    alt={productTitle} 
                />
            <div className={classes.CartItemName}>
                <Link 
                    to={`/products/${productId}`} 
                    title={productTitle}
                >
                    {productTitle}
                </Link>
                <div
                    className={classes.CartItemPrice}
                >
                    $ {productPrice} x {amount} :
                    <br />
                    <span>
                        $ {(productPrice * amount ?? 0).toFixed(2)}
                    </span>
                </div>
            </div>
            <div
                className={classes.CartItemBtns}
            >
                <AmountBtns 
                    amount={amount} 
                    increase={increase} 
                    decrease={decrease} 
                />
                <CustomBtn
                    onClick={() => removeItem(productId)}
                >
                    Удалить
                </CustomBtn>
            </div>
        </div>
    );
};

export default CartItem;
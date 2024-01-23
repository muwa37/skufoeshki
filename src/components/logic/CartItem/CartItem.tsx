import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../../context/CartProvider';
import { ICartItem } from '../../../types/types';

import classes from './CartItem.module.css'

import AmountBtns from '../AmountBtns/AmountBtns';
import CustomBtn from "../../ui/CustomBtn/CustomBtn";

const CartItem:React.FC<ICartItem> = ({ productTitle, productPrice, amount, productId, productImg }:ICartItem) => {
    const { toggleAmount, removeItem }:any = useCartContext();
  
    const increase = ():void => {
        toggleAmount(productId, "inc");
    };
    const decrease = ():void => {
        toggleAmount(productId, "dec");
    };

    return (
        <div
            className={classes.CartItemContent}
        >
                <img 
                    className={classes.CartItemImg}
                    src={productImg} 
                    alt={productId} 
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
            <AmountBtns 
                amount={amount} 
                increase={increase} 
                decrease={decrease} 
            />
            <CustomBtn
                onClick={() => removeItem(productId)}
            >
                remove item
            </CustomBtn>
        </div>
    );
};

export default CartItem;
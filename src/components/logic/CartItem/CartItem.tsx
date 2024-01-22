import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../../context/CartProvider';
import { ICartItem } from '../../../types/types';

import AmountBtns from '../AmountBtns/AmountBtns';

const CartItem:React.FC<ICartItem> = ({ productTitle, productPrice, amount, productId, productImg }:ICartItem) => {
    const { toggleAmount, removeItem }:any = useCartContext();
  
    const increase = ():void => {
        toggleAmount(productId, "inc");
    };
    const decrease = ():void => {
        toggleAmount(productId, "dec");
    };

    return (
        <div>
            <div className={''}>
                <img 
                    src={productImg} 
                    alt={productId} 
                />
            </div>
            <div className={''}>
                <Link 
                    to={`/products/${productId}`} 
                    title={productTitle}
                >
                    {productTitle}
                </Link>
                <div>
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
            <button
                className={''}
                onClick={() => removeItem(productId)}
            >
                remove item
            </button>
        </div>
    );
};

export default CartItem;
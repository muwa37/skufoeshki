import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../../../context/CartProvider';

import AmountBtns from '../AmountBtns/AmountBtns';

const CartItem = ({ productTitle, productPrice, amount, productId, productImg }:any) => {
    const { toggleAmount, removeItem }:any = useCartContext();
  
    const increase = () => {
        toggleAmount(productId, "inc");
    };
    const decrease = () => {
        toggleAmount(productId, "dec");
    };

    return (
        <div>
            <div className={''}>
                <img 
                    src={productImg} 
                    alt={productTitle} 
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
                        $ {(productPrice * amount).toFixed(2)}
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
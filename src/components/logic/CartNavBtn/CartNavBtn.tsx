import React from 'react';
import { useCartContext } from '../../../context/CartProvider';

const CartNavBtn = () => {
    const {cartCount}:any = useCartContext();

    return(
        <div>
            <div>
                cart
                <div>
                    {cartCount}
                </div>
            </div>    
        </div>
    )
}

export default CartNavBtn;
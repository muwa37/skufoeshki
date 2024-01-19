import React from 'react';
import { useCartContext } from '../../../context/CartProvider';
import CartBtns from '../CartBtns/CartBtns';
import CartItem from '../CartItem/CartItem';

const CartList = () => {
    const {cart}:any = useCartContext();

    return(
        <div className={''}>
            {cart.map((item:any) => (
                <CartItem 
                    key={item.productId} 
                    {...item} 
                />
            ))}
            <CartBtns/>
          </div>
    )
}

export default CartList;
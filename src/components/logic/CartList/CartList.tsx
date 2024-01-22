import React from 'react';
import { useCartContext } from '../../../context/CartProvider';
import { ICartItem } from '../../../types/types';
import CartBtns from '../CartBtns/CartBtns';
import CartItem from '../CartItem/CartItem';

const CartList:React.FC = () => {
    const {cart}:any = useCartContext();

    return(
        <div className={''}>
            {cart.map((item:ICartItem) => (
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
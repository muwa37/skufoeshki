import React from "react";

import CartList from '../../components/logic/CartList/CartList';
import CartTotal from '../../components/logic/CartTotal/CartTotal';
import EmptyCart from '../../components/logic/EmptyCart/EmptyCart';

import { useCartContext } from '../../context/CartProvider';

const Cart = () => {
    const {cart}:any = useCartContext();

    if (cart.length < 1) return <EmptyCart/>;

    return (
        <div>
            
            <CartList/>
            <CartTotal/>
        </div>
    )
}

export default Cart;
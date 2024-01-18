import React, { useState } from "react";
import CartList from '../../components/logic/CartList/CartList';
import CartTotal from '../../components/logic/CartTotal/CartTotal';

const Cart = () => {
    return (
        <div>
            <CartList/>
            <CartTotal/>
        </div>
    )
}

export default Cart;
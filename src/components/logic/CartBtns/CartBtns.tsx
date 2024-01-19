import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { useCartContext } from '../../../context/CartProvider';

const CartBtns = () => {
    const {clearCart}:any = useCartContext();

    return (
        <div className='cart__links'>
            <CustomBtn 
            >
                <Link to='/products'>
                    Buy more
                </Link>
            </CustomBtn>
            <CustomBtn
                onClick={clearCart}
            >
                Clear cart
            </CustomBtn>
        </div>
    )
}

export default CartBtns;
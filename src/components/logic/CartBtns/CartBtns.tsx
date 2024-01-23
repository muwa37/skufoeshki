import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import { useCartContext } from '../../../context/CartProvider';

import classes from './CartBtns.module.css'

const CartBtns:React.FC = () => {
    const {clearCart}:any = useCartContext();

    return (
        <div className={classes.CartBtns}>
            <CustomBtn 
            >
                <Link to='/products'>
                    Купить еще
                </Link>
            </CustomBtn>
            <CustomBtn
                onClick={clearCart}
            >
                Очистить
            </CustomBtn>
        </div>
    )
}

export default CartBtns;
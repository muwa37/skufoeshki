import React from 'react';
import { useCartContext } from '../../../context/CartProvider';
import classes from './CartNavBtn.module.css'


const CartNavBtn:React.FC = () => {
    const {cartCount}:any = useCartContext();

    return(
        <div
            className={classes.CartNavContainer}
        >
            <img 
                src={require('../../../assets/ShoppingCart.png')}
                alt="cart" 
                className={classes.CartIcon}
            />
            <div className={classes.CartCount}>
                <span>{cartCount}</span>
            </div>  
        </div>
    )
}

export default CartNavBtn;
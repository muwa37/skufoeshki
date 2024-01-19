import React from "react";
import { useCartContext } from '../../../context/CartProvider';
import { Link } from "react-router-dom";
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

const CartTotal = () => {
  const { cartCount, cartPrice, checkout }:any = useCartContext();
  return (
    <div>
        <div>
            Total Items : <span>{cartCount}</span>
            <br />
            Total Price : <span>$ {cartPrice.toFixed(2)}</span>
        </div>
        <CustomBtn>
            <Link
                to='/checkout'
                type='button'
                className='total__btn'
                onClick={checkout}
            >
                Checkout
            </Link>
        </CustomBtn>
    </div>
  );
};

export default CartTotal;
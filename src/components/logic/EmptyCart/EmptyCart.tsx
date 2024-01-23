import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';
import classes from './EmptyCart.module.css'

const EmptyCart:React.FC = () => {
    return (
        <div
            className={classes.EmptyCartMain}
        >
            <h1
                className={classes.EmptyCartTitle}
            >
                Ваша корзина пуста
            </h1>
            <CustomBtn>
                <Link
                    to={'/products'}
                >
                    Наполнить!
                </Link>
            </CustomBtn>
        </div>
    )
}

export default EmptyCart;
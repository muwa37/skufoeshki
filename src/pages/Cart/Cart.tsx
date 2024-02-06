import React from 'react';

import CartList from '../../components/logic/CartList/CartList';
import CartTotal from '../../components/logic/CartTotal/CartTotal';
import EmptyCart from '../../components/logic/EmptyCart/EmptyCart';

import { useCartContext } from '../../context/CartProvider';

import classes from './Cart.module.css';

const Cart: React.FC = () => {
	const { cart }: any = useCartContext();

	if (cart.length < 1) return <EmptyCart />;

	return (
		<div className={classes.Cart}>
			<CartList />
			<CartTotal />
		</div>
	);
};

export default Cart;

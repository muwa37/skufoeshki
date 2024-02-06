import React, { useState } from 'react';

import AmountBtns from '../AmountBtns/AmountBtns';

import { useCartContext } from '../../../context/CartProvider';

import { IProduct } from '../../../types/types';
import CustomBtn from '../../ui/CustomBtn/CustomBtn';

import classes from './ProductAdder.module.css';

interface IAdderProps {
	product?: IProduct;
}

const AddToCart: React.FC<IAdderProps> = ({ product }) => {
	const { addToCart }: any = useCartContext();

	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount(oldAmount => oldAmount + 1);
	};
	const decrease = () => {
		setAmount(oldAmount => {
			let newAmount = oldAmount - 1;
			if (newAmount < 1) {
				newAmount = 1;
			}
			return newAmount;
		});
	};

	return (
		<div className={classes.ProductAdder}>
			<AmountBtns amount={amount} increase={increase} decrease={decrease} />
			<CustomBtn onClick={() => addToCart(product, amount)}>
				В корзину
			</CustomBtn>
		</div>
	);
};

export default AddToCart;

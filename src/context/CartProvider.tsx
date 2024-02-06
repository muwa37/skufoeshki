import { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';
import { ICartContext } from '../types/types';

import {
	ADD_TO_CART,
	CHECKOUT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM,
} from '../utils/cartActions';

const getLocalStorage = (): object => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorage(),
	cartPrice: 0,
	cartCount: 0,
	isCheckout: false,
};

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem('cart', JSON.stringify(state.cart));
	}, [state.cart]);

	const addToCart = (product: object, amount: number): void => {
		dispatch({ type: ADD_TO_CART, payload: { product, amount } });
	};

	const toggleAmount = (productId: string, value: number): void => {
		dispatch({ type: TOGGLE_CART_ITEM, payload: { productId, value } });
	};

	const removeItem = (productId: string): void => {
		dispatch({ type: REMOVE_CART_ITEM, payload: productId });
	};

	const clearCart = (): void => {
		dispatch({ type: CLEAR_CART });
	};

	const checkout = (): void => {
		dispatch({ type: CHECKOUT });
	};

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				toggleAmount,
				removeItem,
				clearCart,
				checkout,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext<ICartContext | undefined>(CartContext);
};

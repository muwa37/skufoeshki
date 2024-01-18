import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from '../reducer/cartReducer';

import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    CHECKOUT,
} from "../utils/cartActions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_price: 0,
  total_items: 0,
  isCheckout: false,
};

const CartContext = createContext(undefined);

export const CartProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product:any, amount:any) => {
    dispatch({ type: ADD_TO_CART, payload: { product, amount } });
  };

  const toggleAmount = (id:any, value:any) => {
    dispatch({ type: TOGGLE_CART_ITEM, payload: { id, value } });
  };

  const removeItem = (id:any) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const checkout = () => {
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
  return useContext(CartContext);
};
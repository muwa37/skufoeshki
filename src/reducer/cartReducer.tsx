import { IProduct } from '../types/types';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    CHECKOUT,
  } from "../utils/cartActions";

  interface ICartItem extends IProduct {
    amount: number
  }

export const cartReducer = (state:any, action:any) => {
    const { type, payload } = action;
  
    if (type === ADD_TO_CART) {
      const { product, amount } = payload;
      const tempItem = state.cart.find((item:ICartItem) => item.productId === product.productId);
      if (tempItem) {
        const tempCart = state.cart.map((item:ICartItem) => {
          if (item.productId === tempItem.productId) {
            let newAmount = item.amount + amount;
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const { productId, productTitle, productImg, productPrice } = product;
        const newItem = {
          productId,
          productTitle,
          productImg,
          productPrice,
          amount,
        };
        return { ...state, cart: [...state.cart, newItem], isCheckout: false };
      }
    }
  
    if (type === TOGGLE_CART_ITEM) {
      const { productId, value } = payload;
      const tempCart = state.cart.map((item:any) => {
          if (item.productId === productId) {
            if (value === "inc") {
              let newAmount = item.amount + 1;
              return { ...item, amount: newAmount };
            }
            if (value === "dec") {
              let newAmount = item.amount - 1;
              if (newAmount < 1) {
                newAmount = 1;
              }
              return { ...item, amount: newAmount };
            }
          }
          return item;
        });
      return { ...state, cart: tempCart };
    }
  
    if (type === REMOVE_CART_ITEM) {
      const tempCart = state.cart.filter((item:IProduct) => item.productId !== payload);
      return { ...state, cart: tempCart };
    }
  
    if (type === CLEAR_CART) {
      return { ...state, cart: [] };
    }
  
    if (type === COUNT_CART_TOTALS) {
      const { cartCount, cartPrice } = state.cart.reduce(
        (total:any, cartItem:any) => {
            const { amount, productPrice } = cartItem;
            total.cartCount += amount;
            total.cartPrice += productPrice * amount;
    
            return total;
        },
        {
            cartPrice: 0,
            cartCount: 0,
        }
      );
      return { ...state, cartCount, cartPrice };
    }
  
    if (type === CHECKOUT) {
      return {
        ...state,
        isCheckout: true,
        cart: [],
      };
    }
  };
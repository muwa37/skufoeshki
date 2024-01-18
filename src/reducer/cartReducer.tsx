import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    CHECKOUT,
  } from "../utils/cartActions";

export const cartReducer = (state:any , action:any) => {
    const { type, payload } = action;
  
    if (type === ADD_TO_CART) {
      const { product, amount } = payload;
      const tempItem = state.cart.find((item:any) => item.id === product.id);
      if (tempItem) {
        const tempCart = state.cart.map((item:any) => {
          if (item.id === tempItem.id) {
            let newAmount = item.amount + amount;
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const { id, title, image, price } = product;
        const newItem = {
          id,
          title,
          image,
          price,
          amount,
        };
        return { ...state, cart: [...state.cart, newItem], isCheckout: false };
      }
    }
  
    if (type === TOGGLE_CART_ITEM) {
      const { id, value } = payload;
      const tempCart = state.cart.map((item:any) => {
        if (item.id === id) {
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
      const tempCart = state.cart.filter((item:any) => item.id !== payload);
      return { ...state, cart: tempCart };
    }
  
    if (type === CLEAR_CART) {
      return { ...state, cart: [] };
    }
  
    if (type === COUNT_CART_TOTALS) {
      const { cartCount, cartPrice } = state.cart.reduce(
        (total:any, cartItem:any) => {
            const { amount, price } = cartItem;
            total.cartCount += amount;
            total.cartPrice += price * amount;
    
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
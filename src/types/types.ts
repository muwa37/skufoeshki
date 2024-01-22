import React from 'react';

export interface IProduct{
    productId: string,
    productImg: string,
    productTitle: string,
    productDescription: string,
    productPrice: number,
}

export interface ICartItem extends IProduct{
    amount: number
}

export interface IProductPageParams {
    [id: string]: string;
}

export interface ICartContext {
    state: object,
    addToCart: void,
    toggleAmount: void,
    removeItem: void,
    clearCart: void,
    checkout: void,
    cart?: object
}

export interface IAmountBtnsProps {
    increase:React.MouseEventHandler,
    decrease:React.MouseEventHandler,
    amount: number
}
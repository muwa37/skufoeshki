export interface IProduct{
    productId: string,
    productImg: string,
    productTitle: string,
    productDescription: string,
    productPrice: number
}

export interface IList {

}

export interface IAmountBtnsProps {
    increase: void,
    decrease: void,
    amount?: number
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
}
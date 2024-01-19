import { IProduct } from '../types/types';

const fakeResponse = [
    {
        productId:'1',
        productImg: 'link to img1',
        productTitle: 'sample title1',
        productDescription: 'sample description1',
        productPrice: 1337
    },
    {
        productId:'2',
        productImg: 'link to img2',
        productTitle: 'sample title2',
        productDescription: 'sample description2',
        productPrice: 1337
    },
    {
        productId:'3',
        productImg: 'link to img3',
        productTitle: 'sample title3',
        productDescription: 'sample description3',
        productPrice: 1337
    },
    {
        productId:'4',
        productImg: 'link to img4',
        productTitle: 'sample title4',
        productDescription: 'sample description4',
        productPrice: 1337
    },
    {
        productId:'5',
        productImg: 'link to img5',
        productTitle: 'sample title5',
        productDescription: 'sample description5',
        productPrice: 1337
    },
    {
        productId:'6',
        productImg: 'link to img6',
        productTitle: 'sample title6',
        productDescription: 'sample description6',
        productPrice: 1337
    },
    {
        productId:'7',
        productImg: 'link to img7',
        productTitle: 'sample title7',
        productDescription: 'sample description7',
        productPrice: 1337
    },
    {
        productId:'8',
        productImg: 'link to img8',
        productTitle: 'sample title8',
        productDescription: 'sample description8',
        productPrice: 1337
    },
    {
        productId:'9',
        productImg: 'link to img9',
        productTitle: 'sample title9',
        productDescription: 'sample description9',
        productPrice: 1337
    }
]

export default class ProductService {
    static getAll(): IProduct[] {
        const response = fakeResponse;
        return response;
    }
    static getById(id: string | undefined): IProduct | undefined {
        const response = fakeResponse;
        return response.find(product => product.productId === id)
    }
}

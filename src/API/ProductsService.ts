import { IProduct } from '../types/types';

const fakeResponse = [
    {
        productId:'1',
        productImg: '/assets/images/products/Arahis.png',
        productTitle: 'sample title1',
        productDescription: 'sample description1',
        productPrice: 1337
    },
    {
        productId:'2',
        productImg: '/assets/images/products/Beerka.png',
        productTitle: 'sample title2',
        productDescription: 'sample description2',
        productPrice: 1337
    },
    {
        productId:'3',
        productImg: '/assets/images/products/Doritos.png',
        productTitle: 'sample title3',
        productDescription: 'sample description3',
        productPrice: 1337
    },
    {
        productId:'4',
        productImg: '/assets/images/products/Kireeshki.png',
        productTitle: 'sample title4',
        productDescription: 'sample description4',
        productPrice: 1337
    },
    {
        productId:'5',
        productImg: '/assets/images/products/Pringles.png',
        productTitle: 'sample title5',
        productDescription: 'sample description5',
        productPrice: 1337
    },
    {
        productId:'6',
        productImg: '/assets/images/products/Semki.png',
        productTitle: 'sample title6',
        productDescription: 'sample description6',
        productPrice: 1337
    },
    {
        productId:'7',
        productImg: '/assets/images/products/Shipuchki.png',
        productTitle: 'sample title7',
        productDescription: 'sample description7',
        productPrice: 1337
    },
    {
        productId:'8',
        productImg: '/assets/images/products/Sirceedi.png',
        productTitle: 'sample title8',
        productDescription: 'sample description8',
        productPrice: 1337
    },
    {
        productId:'9',
        productImg: '/assets/images/products/SirColbas.png',
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

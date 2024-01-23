import { IProduct } from '../types/types';

const fakeResponse = [
    {
        productId:'1',
        productImg: '/assets/images/products/Arahis.png',
        productTitle: 'Арахис',
        productDescription: 'Много калорий, мало смысла.',
        productPrice: 0.69
    },
    {
        productId:'2',
        productImg: '/assets/images/products/Beerka.png',
        productTitle: 'Тунец',
        productDescription: 'You can tune a piano, but you can\'t piano a tuna.',
        productPrice: 3.14
    },
    {
        productId:'3',
        productImg: '/assets/images/products/Doritos.png',
        productTitle: 'Доритос',
        productDescription: 'Your dad was 360 quickscoped.',
        productPrice: 1.337
    },
    {
        productId:'4',
        productImg: '/assets/images/products/Kireeshki.png',
        productTitle: 'Кириешки',
        productDescription: 'Артефакт давно минувшей эпохи.',
        productPrice: 2.002
    },
    {
        productId:'5',
        productImg: '/assets/images/products/Pringles.png',
        productTitle: 'Pringles',
        productDescription: 'Они правда того стоят?',
        productPrice: 9.999
    },
    {
        productId:'6',
        productImg: '/assets/images/products/Semki.png',
        productTitle: 'Семечки',
        productDescription: 'На пенек сел - косарь должен.',
        productPrice: 0.777
    },
    {
        productId:'7',
        productImg: '/assets/images/products/Shipuchki.png',
        productTitle: 'Шипучки',
        productDescription: 'Сладкая ностальгия.',
        productPrice: 2.007
    },
    {
        productId:'8',
        productImg: '/assets/images/products/Sirceedi.png',
        productTitle: 'Сырцееды',
        productDescription: 'Ради них человечество превратило дым в жидкость.',
        productPrice: 0.666
    },
    {
        productId:'9',
        productImg: '/assets/images/products/SirColbas.png',
        productTitle: 'СырКолбас',
        productDescription: 'Торжество плюрализма.',
        productPrice: 0.420
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

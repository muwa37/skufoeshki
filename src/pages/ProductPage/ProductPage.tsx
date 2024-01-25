import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../API/ProductsService';
import ProductAdder from '../../components/logic/ProductAdder/ProductAdder';
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './ProductPage.module.css'

import { IProduct, IProductPageParams } from '../../types/types';

import Arahis from '../../assets/images/products/Arahis.png'
import Beerka from '../../assets/images/products/Beerka.png'
import Doritos from '../../assets/images/products/Doritos.png'
import Kireeshki from '../../assets/images/products/Kireeshki.png'
import Pringles from '../../assets/images/products/Pringles.png'
import Semki from '../../assets/images/products/Semki.png'
import Shipuchki from '../../assets/images/products/Shipuchki.png'
import Sirceedi from '../../assets/images/products/Sirceedi.png'
import SirColbas from '../../assets/images/products/SirColbas.png'


const ProductPage:React.FC = () => {
    const params = useParams<IProductPageParams>();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        setProduct(ProductService.getById(params.id))
    }, [])

    const router = useNavigate();

    const imgSrc = product?.productImg === 'Arahis'
        ? Arahis 
        : product?.productImg === 'Beerka' ? Beerka
        : product?.productImg === 'Doritos' ? Doritos
        : product?.productImg === 'Kireeshki' ? Kireeshki
        : product?.productImg === 'Pringles' ? Pringles
        : product?.productImg === 'Semki' ? Semki
        : product?.productImg === 'Shipuchki' ? Shipuchki
        : product?.productImg === 'Sirceedi' ? Sirceedi
        : product?.productImg === 'SirColbas' ? SirColbas
        : undefined


    return (
        <div
            className={classes.ProductPage}
        >
            <CustomBtn
                onClick={() => router(`/products`)}
            >
                Вернуться ко всем снекам
            </CustomBtn>
            <div
                className={classes.Product}
            >
                <img 
                    className={classes.ProductImg}
                    src={imgSrc} 
                    alt={product?.productTitle} 
                />
                <div
                    className={classes.ProductBody}
                >
                    <div
                        className={classes.ProductTitle}
                    >
                        {product?.productTitle}
                    </div>
                    <div
                        className={classes.ProductPrice}
                    >
                        {product?.productPrice}
                    </div>
                    <div
                        className={classes.ProductDescription}
                    >
                        {product?.productDescription}
                    </div>
                    <ProductAdder 
                        product={product}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
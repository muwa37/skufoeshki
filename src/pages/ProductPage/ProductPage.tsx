import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../API/ProductsService';
import ProductAdder from '../../components/logic/ProductAdder/ProductAdder';
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './ProductPage.module.css'


const ProductPage = () => {
    const params = useParams();
    const [product, setProduct] = useState<any>({});

    useEffect(() => {
        setProduct(ProductService.getById(params.id))
    }, [])

    const router = useNavigate();

    return (
        <div
            className={classes.ProductPage}
        >
            <CustomBtn
                onClick={() => router(`/products`)}
            >
                back to all products
            </CustomBtn>
            <div
                className={classes.Product}
            >
                <div className={classes.ProductImg}>
                    {product.productImg}
                </div>
                <div
                    className={classes.ProductBody}
                >
                    <div
                        className={classes.ProductTitle}
                    >
                        {product.productTitle}
                    </div>
                    <div
                        className={classes.ProductPrice}
                    >
                        {product.productPrice}
                    </div>
                    <div
                        className={classes.ProductDescription}
                    >
                        {product.productDescription}
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
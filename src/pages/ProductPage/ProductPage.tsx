import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../API/ProductsService';
import ProductAdder from '../../components/logic/ProductAdder/ProductAdder';
import CustomBtn from '../../components/ui/CustomBtn/CustomBtn';
import classes from './ProductPage.module.css';

import { IProduct, IProductPageParams } from '../../types/types';

const ProductPage: React.FC = () => {
	const params = useParams<IProductPageParams>();
	const [product, setProduct] = useState<IProduct>();

	useEffect(() => {
		setProduct(ProductService.getById(params.id));
	}, []);

	const router = useNavigate();

	return (
		<div className={classes.ProductPage}>
			<CustomBtn onClick={() => router(`/products`)}>
				Вернуться ко всем снекам
			</CustomBtn>
			<div className={classes.Product}>
				<img
					className={classes.ProductImg}
					src={product?.productImg}
					alt={product?.productTitle}
				/>
				<div className={classes.ProductBody}>
					<div className={classes.ProductTitle}>{product?.productTitle}</div>
					<div className={classes.ProductPrice}>{product?.productPrice}</div>
					<div className={classes.ProductDescription}>
						{product?.productDescription}
					</div>
					<ProductAdder product={product} />
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

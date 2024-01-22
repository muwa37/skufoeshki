import { useEffect, useState } from "react";
import ProductService from '../../API/ProductsService';
import ProductCardsList from '../../components/logic/ProductCardsList/ProductCardsList';
import { IProduct } from '../../types/types';
const Products:React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const response = ProductService.getAll();

    useEffect(() => {
        setProducts([...products, ...response])
    }, [])

    return (
        <div>
            <ProductCardsList
                products = {products}
            />
        </div>
    )
}

export default Products;
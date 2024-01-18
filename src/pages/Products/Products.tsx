import { useEffect, useState } from "react";
import ProductService from '../../API/ProductsService';
import ProductCardsList from '../../components/logic/ProductCardsList/ProductCardsList';
const Home = () => {
    const [products, setProducts] = useState<any>([]);
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

export default Home;
import Home from "../pages/Home";
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';

const routes = [
    {path: '/home', element: <Home/>},
    {path: '/products', element: <Products/>},
    {path: '/products/:id', element: <ProductPage/>},
    {path: '/contacts', element: <Contacts/>},
    {path: '/cart', element: <Cart/>}
];

export default routes;

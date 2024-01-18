import Home from "../pages/Home/Home";
import Contacts from '../pages/Contacts/Contacts';
import Products from '../pages/Products/Products';
import ProductPage from '../pages/ProductPage/ProductPage';
import Cart from '../pages/Cart/Cart';

const routes = [
    {path: '/home', element: <Home/>},
    {path: '/products', element: <Products/>},
    {path: '/products/:id', element: <ProductPage/>},
    {path: '/contacts', element: <Contacts/>},
    {path: '/cart', element: <Cart/>}
];

export default routes;

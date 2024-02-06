import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';
import Contacts from '../pages/Contacts/Contacts';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import ProductPage from '../pages/ProductPage/ProductPage';
import Products from '../pages/Products/Products';

const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/home', element: <Home /> },
	{ path: '/products', element: <Products /> },
	{ path: '/products/:id', element: <ProductPage /> },
	{ path: '/contacts', element: <Contacts /> },
	{ path: '/checkout', element: <Checkout /> },
	{ path: '/cart', element: <Cart /> },
	{ path: '*', element: <ErrorPage /> },
];

export default routes;

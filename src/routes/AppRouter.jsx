import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductFilter from '../pages/filter/ProductFilter';
import ProductDetails from '../pages/productDetails/ProductDetails';
import CartView from '../components/CartView';

// create all application router
const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/product/filter',
        element: <ProductFilter/>
    },
    {
        path: '/product/details',
        element: <ProductDetails/>
    },
    {
        path: '/cart/view',
        element: <CartView/>
    }
]);

export default AppRouter;
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductFilter from '../pages/filter/ProductFilter';
import ProductDetails from '../pages/productDetails/ProductDetails';

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
    }
]);

export default AppRouter;
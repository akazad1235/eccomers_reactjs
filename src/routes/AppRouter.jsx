import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductFilter from '../pages/filter/ProductFilter';

// create all application router
const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/product/filter',
        element: <ProductFilter/>
    }
]);

export default AppRouter;
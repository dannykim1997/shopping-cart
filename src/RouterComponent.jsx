import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import ShopPage from "./components/shop/ShopPage";
import Cart from "./components/cart/Cart";

const RouterComponent = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: 'shop',
            element: <ShopPage />,
        },
        {
            path: 'cart',
            element: <Cart />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default RouterComponent
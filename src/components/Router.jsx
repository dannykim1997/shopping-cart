import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./home/HomePage";
import ShopPage from "./shop/ShopPage";
import Cart from "./cart/Cart";

const Router = () => {
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

    return <RouterProvider router={router} />;
}

export default Router
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ShopPage from './components/shop/ShopPage';
import CartPage from './components/cart/CartPage';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default RouterComponent;

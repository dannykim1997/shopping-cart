import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ShopPage from './components/shop/ShopPage';
import Cart from './components/cart/Cart';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default RouterComponent;

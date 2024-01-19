import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ShopPage from './components/shop/ShopPage';
import CartPage from './components/cart/CartPage';
import { PropTypes } from 'prop-types';

const RouterComponent = ({cart, setCart, quantities, updateQuantity}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart} quantities={quantities} updateQuantity={updateQuantity} />} />
      <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
    </Routes>
  );
};

RouterComponent.propTypes = {
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired,
    quantities: PropTypes.array.isRequired,
    updateQuantity: PropTypes.func.isRequired,
};

export default RouterComponent;

import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CartPage = ({ cart, setCart }) => {
  const handleQuantityChange = (index, newQuantity) => {
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
};

  const handleRemoveItem = (index) => {
    const newCart = cart.slice();
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
        <Typography variant="h4" align="center" gutterBottom>
            Shopping Cart
        </Typography>
        {cart.map((cartItem, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={cartItem.image} alt={cartItem.title} style={{ maxWidth: '100px', marginRight: '20px' }}/>
                <div>
                    <Typography variant="h6">{cartItem.title}</Typography>
                    <Typography variant="body2">Price: ${cartItem.price}</Typography>
                    <Typography variant="body2">Quantity: {cartItem.quantity}</Typography>
                    <Button onClick={() => handleQuantityChange(index, cartItem.quantity + 1)}>Increase Quantity</Button>
                    <Button onClick={() => handleQuantityChange(index, cartItem.quantity - 1)} disabled={cartItem.quantity === 1}>
                    Decrease Quantity
                    </Button>
                    <Button onClick={() => handleRemoveItem(index)}>Remove Item</Button>
                </div>
            </div>
        ))}
    </div>
  )
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartPage;

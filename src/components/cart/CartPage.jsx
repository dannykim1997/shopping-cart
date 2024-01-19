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
    <div style={{marginTop: '2rem'}}>
        {cart.length === 0 ? (
            <Typography variant='body1'>
                Your cart is empty.
            </Typography>
        ): (
            cart.map((cartItem, index) => (
                <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', padding: '10px', display: 'flex', alignItems: 'center' }}>
                    <img src={cartItem.image} alt={cartItem.title} style={{ maxWidth: '100px', marginRight: '20px' }} />
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Typography variant="h6">{cartItem.title}</Typography>
                                <Typography variant="body2">Price: ${(cartItem.price*cartItem.quantity).toFixed(2)}</Typography>
                            </div>
                            <div>
                                <Typography variant="body2">Quantity: {cartItem.quantity}</Typography>
                                <Button onClick={() => handleQuantityChange(index, cartItem.quantity + 1)} sx={{color: 'orange'}}>+1</Button>
                                <Button onClick={() => handleQuantityChange(index, cartItem.quantity - 1)} disabled={cartItem.quantity === 1} sx={{color: 'orange'}}>
                                    -1
                                </Button>
                                <Button onClick={() => handleRemoveItem(index)} sx={{color: 'orange'}}>Remove Item</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
        <div>
            Checkout Total: ${cart.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0).toFixed(2)}
        </div>
    </div>
  )
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartPage;

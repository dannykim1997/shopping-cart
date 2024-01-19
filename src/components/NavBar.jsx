import { Link } from "react-router-dom";
import '../App.css';
import { AppBar, Toolbar, Button } from "@mui/material";
import { PropTypes } from 'prop-types';

const NavBar = (cart) => {
    console.log(cart.cart.length);
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-evenly' }}>
                <Button color="inherit" component={Link} to='/'>
                    Home
                </Button>
                <Button color="inherit" component={Link} to='/shop'>
                    Shop
                </Button>
                <Button color="inherit" component={Link} to='/cart'>
                    Cart ({cart.cart.length})
                </Button>
            </Toolbar>
        </AppBar>
    )
}

NavBar.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default NavBar
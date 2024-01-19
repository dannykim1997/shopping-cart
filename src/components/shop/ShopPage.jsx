import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button, TextField } from "@mui/material";
import { PropTypes } from 'prop-types';

const ShopPage = ({setCart, quantities, updateQuantity}) => {
    const [products, setProducts] = useState([]);
    const [showDetails, setShowDetails] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                setProducts(data);
                setShowDetails(Array(data.length).fill(false));
            })
    }, []);

    const toggleDetails = (index) => {
        setShowDetails((prev) => {
          const newShowDetails = [...prev];
          newShowDetails[index] = !newShowDetails[index];
          return newShowDetails;
        });
    };

    const addToCart = (index) => {
        const selectedProduct = products[index];
        const quantity = quantities[selectedProduct.id] || 1;
    
        const cartItem = {
            id: selectedProduct.id,
            title: selectedProduct.title,
            image: selectedProduct.image,
            price: selectedProduct.price,
            quantity: quantity,
        };
    
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item.id === cartItem.id);
    
            if (existingIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, cartItem];
            }
        });
    };
    

    return (
        <div>
            <Grid container spacing={3} sx={{ width: '100%', marginX: 'auto', marginY: 'auto' }} >
                {products.map((product, index) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardMedia
                                component='img'
                                alt='{product.title}'
                                height='140'
                                image={product.image}
                                sx={{
                                    objectFit: 'contain'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1, height: '160px', display: 'flex', flexDirection: 'column' }}>
                                {showDetails[index] ? (
                                    <>
                                        <Typography variant="body2" color="text.secondary" sx={{ maxHeight: '3.6rem', minHeight: '3.6rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            Description: {product.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Rating: {product.rating.rate} ({product.rating.count})Reviews
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="h6" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Category: {product.category}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: ${product.price}
                                        </Typography>
                                    </>
                                )}
                            </CardContent>
                            <Button onClick={() => toggleDetails(index)} >
                                {showDetails[index] ? 'Show Less' : 'Show More'}
                            </Button>
                            <TextField
                                type="number"
                                label="Quantity"
                                value={quantities[product.id] || 1}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value, 10);
                                    const newQuantity = isNaN(value) ? 1 : Math.min(Math.max(value, 1), 10);
                                    updateQuantity(product.id, newQuantity);
                                }}
                            />
                            <Button onClick={() => addToCart(index)}>
                                Add to Cart
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    ); 
}

ShopPage.propTypes = {
    setCart: PropTypes.func.isRequired,
    quantities: PropTypes.array.isRequired,
    updateQuantity: PropTypes.func.isRequired,
}

export default ShopPage
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";

const ShopPage = () => {
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

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Products
            </Typography>
            <Grid container spacing={3} sx={{ width: '100%', marginX: 'auto' }}>
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
                            <CardContent sx={{ flexGrow: 1, height: '120px', display: 'flex', flexDirection: 'column' }}>
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
                            <Button onClick={() => toggleDetails(index)} sx={{ marginTop: 'auto' }}>
                                {showDetails[index] ? 'Show Less' : 'Show More'}
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    ); 
}

export default ShopPage
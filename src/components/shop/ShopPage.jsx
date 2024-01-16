import { useEffect, useState } from "react";

const ShopPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    console.log(products);
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <img src={product.image} alt={product.title} className="product-image"/>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p>Category: {product.category}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    ); 
}

export default ShopPage
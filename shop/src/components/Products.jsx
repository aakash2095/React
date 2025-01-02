import React, { useEffect, useState } from 'react';
import './shop.css'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data); 
        setProducts(data)
     
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <h1>Products</h1>
    <div className="product-container">
  <h1 className="title">Products</h1>
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <Link to = {`/products/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.title} />
        <h2 className="product-title">{product.title}</h2>
        </Link>
        
      </div>
    ))}
  </div>
</div>

  </div>
  );
};

export default Products;

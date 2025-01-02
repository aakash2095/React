import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const FetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`); 
      const data = await response.json();
      setProduct(data);
    };

    FetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      
        <img className="product-image" src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h2>{product.price}$ </h2>

      


      
    </>
  );
};

export default ProductDetails;

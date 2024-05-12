import React, { useState, useEffect } from "react";
import productItem from "./productItem";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = "https://fakestoreapi.com/products";
        const options = {
          method : 'GET',
        }
        const response = await fetch(apiUrl, options)
        const fetchedData = await response.json()
        const updatedData = fetchedData.products.map(products.map(product => ({
          id : product.id,
          imageUrl : product.image_url,
          name: product.name,
          setProducts(updatedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul>
      <div className="product-grid">
        {products.map((product) => (
          <productItem key={product.id} {...product} />
        ))}
      </div>
    </ul>
  );
};

export default Product;

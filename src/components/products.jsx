import React from 'react';
import Product from './listaProduct'; 

const Products = ({ products, onCheckboxChange, addCard }) => {
  return (
    <div className="product-list">
      {products.map(({ id, name, value, image }) => (
        <Product
          key={id}
          id={id}
          name={name}
          value={value}
          image={image}
          onCheckboxChange={onCheckboxChange}
          addCard={addCard}
        />
      ))}
    </div>
  );
};

export default Products;

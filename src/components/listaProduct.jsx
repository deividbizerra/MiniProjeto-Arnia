import React from "react";

const Product = ({ onCheckboxChange, addCard, ...Product }) => {
  const { name, value, image, id } = Product;
  return (
    <div className="product-card" key={id}>
      <img src={image} alt="" className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="inputAdditen">
          <input
            type="checkbox"
            onChange={(e) => onCheckboxChange(e.target.checked)}
            onClick={() => addCard({ Product })}
          />
          <p className="product-value">
            Valor:{""}
            {value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from "react"; // Importe o useState
import Products from "../components/products";

import { SCREENS } from "../App";
import Header from "../components/header";
import Title from "../components/Title";
import Footer from "../components/footer";
const ProductsPage = ({ changeScreen, products, addCard}) => {
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
  return (
    <div>
      <Header />
      <Title name={"Produtos"} quantidade={quantidadeSelecionada} />

      <Products addCard={addCard}
        products={products}
        onCheckboxChange={(isChecked) => {
          if (isChecked) {
            setQuantidadeSelecionada((prev) => prev + 1);
          } else {
            setQuantidadeSelecionada((prev) => prev - 1);
          }
        }}
      />
      <button onClick={() => changeScreen(SCREENS.CART)}>
        Ir para o carrinho
      </button>
      <Footer />
    </div>
  );
};

export default ProductsPage;

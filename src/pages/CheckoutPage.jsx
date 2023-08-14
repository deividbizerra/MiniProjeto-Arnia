import React, { useState } from "react";
import Header from "../components/header";
import Title from "../components/Title";
import { SCREENS } from "../App";
import Footer from "../components/footer";

const CheckoutPage = ({ changeScreen, cart}) => {
  const [cartItems, setCartItems] = useState(cart);

  // Função para calcular o total de produtos no carrinho
  const calcularTotalProdutos = () => {
    return cartItems.reduce((total, item) => total + item.quantidade, 0);
  };

  // Função para calcular a soma total dos valores no carrinho
  const calcularTotalValor = () => {
    return cartItems.reduce((total, item) => total + item.Product.value * item.quantidade, 0);
  };

  return (
    <div>
      <Header />
      <Title name={"Checkout"} quantidade={calcularTotalProdutos()} />

      <ul className="checkout-list" style={{ display: "flex", listStyle: "none" }}>
        {cartItems.map((item) => (
          <li key={item.Product.id} className="checkout-item">
            <div >
              <img
                src={item.Product.image}
                alt={item.Product.name}
                className="product-image"
              />
            </div>
          </li>
        ))}
      </ul>

      <p>Total de produtos: {calcularTotalProdutos()}</p>
      <p>Total a pagar: {calcularTotalValor().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>

      <button onClick={() => changeScreen(SCREENS.PRODUCTS, alert("Compra Efetuada Com Sucesso")) }>Finalizar Compra</button>
      <button onClick={() => changeScreen(SCREENS.CART)}>Voltar para o carrinho</button>
      <Footer />
    </div>
  );
};

export default CheckoutPage;

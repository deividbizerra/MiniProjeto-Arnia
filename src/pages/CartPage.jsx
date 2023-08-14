import React from "react";
import Header from "../components/header";
import Title from "../components/Title";
import { SCREENS } from "../App";
import Footer from "../components/footer";

const CartPage = ({ changeScreen, cart, setCart }) => {
  const adicionar = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.Product.id === itemId ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCart(updatedCart);
  };

  const remover = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.Product.id === itemId
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    );

    const filteredCart = updatedCart.filter((item) => item.quantidade > 0);

    setCart(filteredCart);
  };

  const totalQuantidade = cart.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <div>
      <Header />
      <Title name={"Carrinho"} quantidade={totalQuantidade} />

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.Product.id} className="cart-item">
            <div className="product-card">
              <img
                src={item.Product.image}
                alt={item.Product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{item.Product.name}</h3>
                <p className="product-value">
                  Valor:{" "}
                  {item.Product.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

                <p>Quantidade: {item.quantidade}</p>

                <div className="buttonCard">
                  <button onClick={() => adicionar(item.Product.id)}>+</button>
                  <button onClick={() => remover(item.Product.id)}>-</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="buttonsCompra">
        <button onClick={() => changeScreen(SCREENS.PRODUCTS)}>
          Continuar Comprando
        </button>
        <button onClick={() => changeScreen(SCREENS.CHECKOUT)}>
          Ir para checkout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

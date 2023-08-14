import React, { useState } from "react"; // Importe o useState aqui
import "./App.css";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";

import productsJSON from "./assets/Products.json";

export const SCREENS = {
  PRODUCTS: "products",
  CART: "cart",
  CHECKOUT: "checkout",
};

function App() {
  const [screen, setScreen] = useState(SCREENS.PRODUCTS);
  const [ products, setProducts] = useState(productsJSON)
  const [ cart, setCart] = useState([])

  const addCard = (product)=>{
    setCart([
      ...cart,
      {
        ...product,
        quantidade: 1
      }
    ])
  }

  if (screen === SCREENS.PRODUCTS) {
    return (
      <ProductsPage 
      changeScreen={setScreen}  
      products={products}
      addCard={addCard}
      />
    )}

  if (screen === SCREENS.CART) {
    return (
    <CartPage 
    changeScreen={setScreen} 
    cart={cart} 
    setCart={setCart}/>)
  }

  return <CheckoutPage changeScreen={setScreen}  cart={cart} />;

}

export default App;

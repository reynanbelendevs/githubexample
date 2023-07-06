import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CardProvider";
function App() {
  const [declanumber, setdeclarenumber] = useState(0);
  const [jsonobj, setjsonobj] = useState({
    name: "1",
  });
  const [cartIsShown, setCartIsshown] = useState(false);
  const showCartHandler = () => {
    setdeclarenumber("1");

    setCartIsshown(true);
  };
  const TEST = () => {
    console.log("HEHE");
  };
  const hideCartHandler = () => {
    setCartIsshown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>

      <main>
        <Meals TEST={TEST}></Meals>
      </main>
      <p>{jsonobj.name}</p>
    </CartProvider>
  );
}

export default App;

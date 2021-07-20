import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Cartprovider from "./store/CartProvider";
function App() {
  const [modal, modalSet] = useState(false);
  const showModal = () => {
    modalSet(true);
  };
  const hideModal = () => {
    modalSet(false);
  };
  return (
    <Cartprovider>
      {modal && <Cart state={modal} onHide={hideModal} />}
      <Header onShow={showModal} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;

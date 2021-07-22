import { useState } from "react";

// import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };
//   const functionf = (data) => {
//     console.log(data);
//   };
//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals func={functionf} />
//       </main>
//     </CartProvider>
//   );
// }

//
function App() {
  const [valid, validset] = useState(false);
  const func = () => {
    validset((valid) => !valid);
  };
  return (
    <div>
      <h1>Hii</h1>
      <button onClick={func}>brr</button>
      {valid && <p>Hello</p>}
    </div>
  );
}
export default App;

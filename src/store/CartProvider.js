import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultcartstate = { items: [], total: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updated = state.items.concat(action.item);
    const updatedtotalAmount =
      state.total + action.item.price + action.item.amount;
    return { item: updated, total: updatedtotalAmount };
  }
  return defaultcartstate;
};
const Cartprovider = (props) => {
  const [cartitems, dispatchcartitems] = useReducer(
    cartReducer,
    defaultcartstate
  );

  const addingitems = (item) => {
    dispatchcartitems({ type: "ADD", item: item });
  };
  const removingitems = (id) => {
    dispatchcartitems({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartitems.items,
    total: cartitems.total,
    additem: addingitems,
    removeitem: removingitems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;

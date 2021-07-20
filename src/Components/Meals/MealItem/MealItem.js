import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const context = useContext(CartContext);
  const price = `Rs.${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    context.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>

        <div className={styles.price}>{price}</div>
      </div>

      <div>
        <MealItemForm onAddtocart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

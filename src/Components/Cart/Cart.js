import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 200 }].map((e) => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItem}
      <div className={styles.total}>
        <span>Total</span>
        <span>200</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

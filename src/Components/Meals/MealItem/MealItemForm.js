import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [valid, validset] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1 ||
      enteredAmountnumber > 5
    ) {
      validset(false);
      return;
    }

    props.onAddtocart(enteredAmountnumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add </button>
      {!valid && <p>Enter Valid input</p>}
    </form>
  );
};
export default MealItemForm;

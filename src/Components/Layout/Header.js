import React from "react";
import meals from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
//Header and image
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;

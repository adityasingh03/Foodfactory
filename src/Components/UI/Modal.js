import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalelement = document.querySelector("#modal--root");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHide} />,
        portalelement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalelement
      )}
      {/* <Backdrop/>
        <ModalOverlay>{props.children}</ModalOverlay> */}
    </React.Fragment>
  );
};
export default Modal;

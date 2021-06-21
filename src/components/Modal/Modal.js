import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDownEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDownEsc);
  }
  handleKeyDownEsc = (e) => {
    const { closeModal } = this.props;
    if (e.code === "Escape") {
      closeModal();
    }
  };
  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImg, alt } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleOverlayClick}>
        <div className={styles.Modal}>
          <img src={largeImg} alt={alt} />
        </div>
      </div>
    );
  }
}
export default Modal;

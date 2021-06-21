import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.Form}>
          <button type="submit" className={styles.Button}>
            <span className={styles.ButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={inputValue}
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

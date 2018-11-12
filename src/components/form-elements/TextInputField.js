import React, { Component } from "react";
import "./InputField.css";

export default class TextInputField extends Component {
  handleFocus = e => {};
  handleBlur = e => {};

  render() {
    const { name, label, onChange, value } = this.props;

    return (
      <div className="input-field">
        <label className="input-field__label" htmlFor={name}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          type="text"
          className="input-field__text-input"
          onChange={onChange}
          placeHolder={value}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./InputField.css";

export default class SelectField extends Component {
  handleChange = e => {};
  handleFocus = e => {};
  handleBlur = e => {};

  render() {
    const { name, label, options, onchange, value } = this.props;

    return (
      <div className="input-field">
        <label className="input-field__label" htmlFor={name}>
          {label}
        </label>
        <select
          id={name}
          name={name}
          className="input-field__text-input"
          onChange={onchange}
        >
          {options.map(option => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

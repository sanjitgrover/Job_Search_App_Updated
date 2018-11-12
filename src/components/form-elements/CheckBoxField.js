import React, { Component } from "react";
import "./CheckBoxField.css";

export default class CheckBoxField extends Component {
  handleFocus = e => {};
  handleBlur = e => {};

  render() {
    const { name, label, onChange, value } = this.props;

    return (
      <div className="checkbox-field">
        <input
          id={name}
          name={name}
          type="checkbox"
          onChange={onChange}
          value={value}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
}

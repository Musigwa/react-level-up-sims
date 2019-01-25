import React from "react";
import "./input.css";
export const SimpleInput = ({ label, type, value, onChange }) => {
  return (
    <div className="simple-input">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

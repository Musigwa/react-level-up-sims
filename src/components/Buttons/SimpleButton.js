import React from "react";
import styles from "./styles";
const SimpleButton = ({ title, onClick, type }) => {
  return (
    <div className="btn">
      <button onClick={onClick} style={styles[type]}>
        {title}
      </button>
    </div>
  );
};

export default SimpleButton;

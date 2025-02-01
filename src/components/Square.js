import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button 
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "5px",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

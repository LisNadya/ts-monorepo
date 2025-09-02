import React, { useState } from "react";

export const Button = ({ label }: { label: string }) => {
  const [color, setColor] = useState("red");

  const handleColor = () => {
    setColor(color === "red" ? "blue" : "red");
  };
  return (
    <button style={{ padding: 10, background: color }} onClick={handleColor}>
      {label}
    </button>
  );
};

import React, { ReactNode } from "react";

interface props {
  children: String;
  color?: "primary" | "secondary" | "warning";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

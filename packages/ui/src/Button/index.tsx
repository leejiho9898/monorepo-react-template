import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  onClick?: () => void;
}

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

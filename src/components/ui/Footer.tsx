import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  isLoading = false,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;

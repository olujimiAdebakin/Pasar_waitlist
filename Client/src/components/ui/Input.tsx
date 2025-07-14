import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const Input: React.FC<InputProps> = ({
  className = "",
  disabled = false,
  isLoading = false,
  ...props
}) => {
  return (
    <input className={className} disabled={disabled || isLoading} {...props} />
  );
};

export default Input;

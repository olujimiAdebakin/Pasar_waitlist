import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", disabled = false, isLoading = false, ...props }, ref) => {
    return (
      <input
        className={className}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;

import React from "react";
import { TextInput } from "../../atoms/TextInput";

interface TextInputWithButtonProps {
  name: string;
  label: string;
  variant: "contained" | "outlined" | "error";
  size: "small" | "medium" | "large";
  placeholder?: string;
  buttonText: string;
  onButtonClick: () => void;
  disabled?: boolean;
}

export const TextInputWithButton: React.FC<TextInputWithButtonProps> = ({
  name,
  label,
  variant,
  size,
  placeholder,
  buttonText,
  onButtonClick,
  disabled,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <TextInput
        name={name}
        label={label}
        variant={variant}
        size={size}
        placeholder={placeholder}
        disabled={disabled}
      />
      <button
        onClick={onButtonClick}
        className={`btn-${variant} ${size}`}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
};

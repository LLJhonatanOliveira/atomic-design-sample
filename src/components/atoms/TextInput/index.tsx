import React from "react";
import { useFormContext } from "react-hook-form";

const inputVariants = {
  contained:
    "text-base font-normal rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
  outlined:
    "text-base font-normal rounded bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
  error:
    "text-base font-normal rounded bg-white border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500",
};

export type InputVariants = keyof typeof inputVariants;

const inputSizes = {
  small: `text-xs h-[30px] px-2`,
  medium: `text-sm h-[38px] px-3`,
  large: `text-base h-[46px] px-4`,
};

export interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  variant: InputVariants;
  size: "small" | "medium" | "large";
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

export const TextInput = ({
  name,
  label,
  placeholder = "",
  variant,
  size,
  disabled,
  value,
  onChange,
  error,
  type = "text",
}: TextInputProps) => {
  const { register } = useFormContext() || {};

  const inputClassName = `${inputVariants[error ? "error" : variant]} ${inputSizes[size]} ${
    disabled ? "bg-gray-200 cursor-not-allowed" : ""
  }`;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...(register ? register(name) : {})} 
        className={inputClassName}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange} 
      />
    </div>
  );
};

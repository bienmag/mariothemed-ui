import React, { ReactElement } from "react";

declare type ButtonSize = "xs" | "sm" | "md" | "lg";
interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  size?: ButtonSize;
  variant?: "outline" | "solid" | "ghost" | "link" | "logo";
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  className?: string;
  height?: string;
  width?: string;
  borderWidth?: string;
}
declare const MyButton: React.FC<ButtonProps>;

interface CheckboxProps {
  size?: string;
  color?: string;
  className?: string;
  disabled: any;
}
declare const MyCheckbox: React.FunctionComponent<CheckboxProps>;

interface InputProps {
  variant?: string;
  size?: string;
  className?: string | string[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const MyInput: React.FunctionComponent<InputProps>;

interface TextareaProps {
  placeholder?: string;
  resize?: string;
  color?: string;
  disabled?: boolean;
}
declare const MyTextarea: React.FunctionComponent<TextareaProps>;

interface RadioProps {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  isChecked?: boolean;
  onChange?: (value: any) => void;
  value?: string;
  defaultisChecked?: boolean;
}
declare const MyRadio: React.FunctionComponent<RadioProps>;

export { MyButton, MyCheckbox, MyInput, MyRadio, MyTextarea };

import React$1 from "react";

interface ButtonProps {
  children: string | React$1.ReactElement | React$1.ReactElement[];
  color?: string;
  size?: string;
  variant?: string;
  className?: string | string[];
}
declare const MyButton: React$1.FunctionComponent<ButtonProps>;

interface CheckboxProps {
  size?: string;
  color?: string;
  className?: string;
}
declare const MyCheckbox: React$1.FunctionComponent<CheckboxProps>;

interface InputProps {
  variant?: string;
  size?: string;
  className?: string | string[];
  placeholder?: string;
}
declare const MyInput: React$1.FunctionComponent<InputProps>;

interface TextareaProps {
  placeholder?: string;
  resize?: string;
  color?: string;
  disabled?: boolean;
}
declare const MyTextarea: React.FunctionComponent<TextareaProps>;

export { MyButton, MyCheckbox, MyInput, MyTextarea };

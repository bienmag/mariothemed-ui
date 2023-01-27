import React from "react";

declare type ButtonSize = "xs" | "sm" | "md" | "lg";
interface ButtonProps {
  children: string | React.ReactElement | React.ReactElement[];
  color?: string;
  size?: ButtonSize;
  variant?: "outline" | "solid" | "ghost" | "link";
  className?: string;
}
declare const MyButton: React.FunctionComponent<ButtonProps>;

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
  onChange?: string;
  myText?: string;
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
  variant?: string;
  size?: string;
  className?: string | string[];
}
declare const MyRadio: React.FunctionComponent<RadioProps>;

export { MyButton, MyCheckbox, MyInput, MyRadio, MyTextarea };

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
}
declare const MyCheckbox: React.FunctionComponent<CheckboxProps>;

export { MyButton, MyCheckbox };

import "./Input.css";

import React from "react";

export interface InputProps {
  // children: React.ReactElement | React.ReactElement[];
  variant?: string;
  size?: string;
  className?: string | string[];
  placeholder?: string;
  // isDisabled?: boolean;
}
const MyInput: React.FunctionComponent<InputProps> = ({
  variant,
  size,
  placeholder,
  ...props
}) => {
  const rootInput = ["input"];

  if (size === "xs") {
    rootInput.push("input-xs");
  }

  if (size === "sm") {
    rootInput.push("input-sm");
  }

  if (size === "md") {
    rootInput.push("input-md");
  }
  if (size === "lg") {
    rootInput.push("input-lg");
  }

  if (variant === "outline") {
    rootInput.push("input-outline");
  }

  if (variant === "filled") {
    rootInput.push("input-filled");
  }

  if (variant === "flushed") {
    rootInput.push("input-flushed");
  }

  if (variant === "unstyled") {
    rootInput.push("input-unstyled");
  }

  return (
    <input
      {...props}
      type="text"
      placeholder={placeholder}
      className={`
  ${rootInput.join(" ")}`}
    ></input>
  );
};

export default MyInput;

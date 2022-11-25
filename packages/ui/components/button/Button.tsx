import "./Button.css";

import React from "react";

export interface ButtonProps {
  // children: React.ReactComponentElement<any> | React.ReactComponentElement<any>[]
  children: React.ReactElement | React.ReactElement[];
  color: string;
  size?: boolean;
  // variant: string;
  className?: string;
  // isDisabled?: boolean;
}

const MyButton: React.FunctionComponent<ButtonProps> = ({
  children,
  color,
  size,
  // variant,
  // isDisabled,
  ...props
}) => {
  const rootButton = ["button"];

  if (size) {
    rootButton.push("button-small");
  }
  console.log("these are the props", props.className);

  return (
    <button
      {...props}
      className={`border-2 px-4 py-2 rounded-md ${props.className}`}
      style={{ color }}
    >
      {size}
      {children}
    </button>
  );
};

export default MyButton;

import "./Button.css";

import React from "react";

export interface ButtonProps {
  // children:
  // | React.ReactComponentElement<any>
  // | React.ReactComponentElement<any>[];
  children: React.ReactElement | React.ReactElement[];
  color?: string;
  size?: string;
  variant?: string;
  className?: string | string[];
  // isDisabled?: boolean;
}

const MyButton: React.FunctionComponent<ButtonProps> = ({
  children,
  color,
  size,
  variant,
  // isDisabled,
  ...props
}) => {
  const rootButton = ["button"];

  if (size === "xs") {
    rootButton.push("button-xs");
  }
  if (size === "sm") {
    rootButton.push("button-sm");
  }
  if (size === "md") {
    rootButton.push("button-md");
  }
  if (size === "lg") {
    rootButton.push("button-lg");
  }

  if (variant === "solid") {
    rootButton.push("button-solid");
  }

  if (variant === "outline") {
    rootButton.push("button-outline");
  }

  if (variant === "ghost") {
    rootButton.push("button-ghost");
  }

  if (variant === "link") {
    rootButton.push("button-link");
  }

  return (
    <button
      {...props}
      className={`
      ${rootButton.join(" ")}

     }`}
      style={{ color }}
    >
      {children}
    </button>
  );
};

export default MyButton;

// border-2 px-4 py-2 rounded-md

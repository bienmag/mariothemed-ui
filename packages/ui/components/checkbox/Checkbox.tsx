import "./Checkbox.css";

import React from "react";

export interface CheckboxProps {
  // children: React.ReactElement | React.ReactElement[];
  size?: string;
  color?: string;
  className?: string;
}

const MyCheckbox: React.FunctionComponent<CheckboxProps> = ({
  // children,
  size,
  color,

  ...props
}) => {
  const rootCheckbox = ["checkbox"];

  if (size === "xs") {
    rootCheckbox.push("checkbox-xs");
  }
  if (size === "md") {
    rootCheckbox.push("checkbox-md");
  }

  if (size === "lg") {
    rootCheckbox.push("checkbox-lg");
  }

  if (color === "green") {
    rootCheckbox.push("checkbox-green");
  }

  return (
    <input
      {...props}
      className={`${rootCheckbox.join(" ")}`}
      type="checkbox"
    ></input>
  );
};

export default MyCheckbox;

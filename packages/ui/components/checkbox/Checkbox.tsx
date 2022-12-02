import "./Checkbox.css";

import React from "react";

export interface CheckboxProps {
  children: React.ReactElement | React.ReactElement[];
  size?: string;
  color?: string;
  className?: string | string[];
  // isDisabled?: boolean,
}

const MyCheckbox: React.FunctionComponent<CheckboxProps> = ({
  children,
  size,
  color,
  // isDisabled,
  ...props
}) => {
  const rootCheckbox = ["checkbox"];

  return (
    <input
      className={rootCheckbox.join(" ")}
      type="checkbox"
      {...props}
    ></input>
  );
};

export default MyCheckbox;

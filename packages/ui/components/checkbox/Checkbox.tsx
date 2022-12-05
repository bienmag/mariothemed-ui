import "./Checkbox.css";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface CheckboxProps {
  // children: React.ReactElement | React.ReactElement[];
  size?: string;
  color?: string;
  className?: string;
  // isDisabled?: boolean,
}

const MyCheckbox: React.FunctionComponent<CheckboxProps> = ({
  // children,
  size,
  color,
  // isDisabled,
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
    <>
      <input
        {...props}
        className={`${rootCheckbox.join(" ")}`}
        type="checkbox"
      ></input>
      <FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon>
    </>
  );
};

export default MyCheckbox;

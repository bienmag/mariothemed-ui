// import "./Checkbox.css";

import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

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
  const styleOptions = [];

  const sizeMap = {
    xs: tw`appearance-none relative w-3 h-3 rounded border-2 border-gray-300 cursor-pointer checked:bg-tick checked:bg-contain checked:border-transparent checked:border-red-800 focus:outline-none`,
    md: tw`appearance-none relative w-4 h-4 rounded border-2 border-gray-300 cursor-pointer  
    checked:bg-tick checked:bg-contain checked:border-transparent  focus:outline-none checked:border-red-800`,
    lg: tw`appearance-none relative w-5 h-5 rounded border-2 border-gray-300 cursor-pointer  
    checked:bg-tick checked:bg-contain checked:border-transparent  focus:outline-none checked:border-red-800`,
  };

  styleOptions.push(sizeMap[size]);

  // if (color === "green") {
  //   rootCheckbox.push("checkbox-green");
  // }

  const baseStyle = tw`appearance-none relative w-6 h-6 rounded border-2 border-gray-300 cursor-pointer checked:bg-tick checked:bg-center checked:bg-no-repeat  checked:border-red-800
  checked:bg-contain checked:border-2  focus:outline-none`;

  const Checkbox = styled.input`
    ${baseStyle}
  `;

  return <Checkbox css={styleOptions} type="checkbox"></Checkbox>;
};

export default MyCheckbox;

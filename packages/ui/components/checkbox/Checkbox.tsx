// import "./Checkbox.css";

import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface CheckboxProps {
  // children: React.ReactElement | React.ReactElement[];
  size?: string;
  color?: string;
  className?: string;
  disabled;
}

const MyCheckbox: React.FunctionComponent<CheckboxProps> = ({
  // children,
  size,
  color,
  disabled,
  // ...props
}) => {
  const styleOptions = [];

  const sizeMap = {
    xs: tw`appearance-none relative w-3 h-3 rounded border-2 border-gray-300 cursor-pointer checked:bg-test checked:bg-contain checked:border-transparent checked:border-yellow-800 focus:outline-none`,
    md: tw`appearance-none relative w-4 h-4 rounded border-2 border-gray-300 cursor-pointer  
    checked:bg-test checked:bg-contain checked:border-transparent  focus:outline-none checked:border-yellow-800`,
    lg: tw`appearance-none relative w-5 h-5 rounded border-2 border-gray-300 cursor-pointer  
    checked:bg-test checked:bg-contain checked:border-transparent  focus:outline-none checked:border-yellow-800`,
  };

  styleOptions.push(sizeMap[size]);

  const colorMap = {
    green: tw`checked:border-green-600`,
    blue: tw`checked:border-blue-800`,
    yellow: tw`checked:border-yellow-300`,
  };

  styleOptions.push(colorMap[color]);

  const baseStyle = tw`appearance-none relative w-4 h-4 rounded border-2 border-gray-300 cursor-pointer 
  checked:bg-test  checked:bg-center checked:bg-no-repeat  checked:border-yellow-800
  checked:bg-contain checked:border-2  focus:outline-none`;

  // default checked!

  const Checkbox = styled.input`
    ${baseStyle}
  `;

  return (
    <Checkbox css={styleOptions} type="checkbox" disabled={disabled}></Checkbox>
  );
};

export default MyCheckbox;

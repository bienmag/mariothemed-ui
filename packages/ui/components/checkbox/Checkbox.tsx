import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface CheckboxProps {
  childen?;
  size?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  children,
  size,
  color,
  disabled,
  defaultChecked,
}) => {
  const styleOptions = [];

  const sizeMap = {
    xs: tw`w-4 h-4`,
    md: tw`w-5 h-5`,
    lg: tw`w-6 h-6`,
  };

  styleOptions.push(sizeMap[size]);

  const colorMap = {
    yellow: tw`checked:border-myellow `,
    red: tw`checked:border-mred`,
    blue: tw`checked:border-mblue`,
    green: tw`checked:border-mgreen`,
  };

  styleOptions.push(colorMap[color]);

  const baseStyle = tw`appearance-none relative w-6 h-6 rounded border-2  
  checked:bg-mario  checked:bg-center checked:bg-no-repeat  checked:border-gray-500
  checked:bg-contain checked:border-2  focus:outline-none`;

  const disabledStyle = tw`bg-gray-200 text-gray-200 border-gray-200 cursor-not-allowed`;

  if (disabled) {
    styleOptions.push(disabledStyle);
  }
  const Checkbox = styled.input`
    ${baseStyle}
    ${styleOptions}
  `;

  return (
    <Checkbox
      type="checkbox"
      disabled={disabled}
      defaultChecked={defaultChecked}
    ></Checkbox>
  );
};

export default Checkbox;

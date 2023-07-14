import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface RadioProps {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  children,
  size = "md",
  color,
  className,
  disabled,
  defaultChecked,
}) => {
  const styleOptions = [];

  const sizeMap = {
    sm: tw`w-5 h-5`,
    md: tw`w-6 h-6`,
    lg: tw`w-7 h-7`,
  };

  styleOptions.push(sizeMap[size]);

  const colorMap = {
    yellow: tw`checked:border-myellow`,
    red: tw`checked:border-mred`,
    blue: tw`checked:border-mblue`,
    green: tw`checked:border-mgreen`,
  };

  styleOptions.push(colorMap[color]);

  const baseStyle = tw`appearance-none relative rounded-full border-2 checked:bg-mario checked:border-gray-500 checked:bg-contain checked:border-4 focus:outline-none`;

  const disabledStyle = tw`bg-gray-200 text-gray-200 border-gray-200 cursor-not-allowed`;

  if (disabled) {
    styleOptions.push(disabledStyle);
  }

  const RadioInput = styled.input`
    ${baseStyle}
    ${styleOptions}
  `;

  return (
    <label className={className}>
      <RadioInput
        type="radio"
        disabled={disabled}
        defaultChecked={defaultChecked}
      />
    </label>
  );
};

export default Radio;

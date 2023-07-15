import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface RadioProps {
  children?: string;
  size?: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  value?: string;
  id?: string;
  name?: string;
  label?: string;
  onChange?: () => void;
}

const Radio: React.FC<RadioProps> = ({
  children,
  size = "md",
  color,
  disabled,
  defaultChecked,
  value,
  id,
  name,
  className,
  label,
  onChange,
}) => {
  const styleOptions = [];

  const sizeMap = {
    sm: tw`w-5 h-5`,
    md: tw`w-6 h-6`,
    lg: tw`w-7 h-7`,
  };

  styleOptions.push(sizeMap[size]);

  const colorMap = {
    yellow: {
      solid: tw`border-myellow border-opacity-30 checked:border-myellow`,
      disabled: tw`border-myellow border-opacity-30 checked:border-myellow bg-myellow bg-opacity-30 cursor-not-allowed`,
    },
    red: {
      solid: tw`border-mred border-opacity-30 checked:border-mred`,
      disabled: tw`border-mred border-opacity-30 checked:border-mred bg-mred bg-opacity-30 cursor-not-allowed`,
    },
    blue: {
      solid: tw`border-mblue border-opacity-30 checked:border-mblue`,
      disabled: tw`border-mblue border-opacity-30 checked:border-mblue bg-mblue bg-opacity-30 cursor-not-allowed`,
    },
    green: {
      solid: tw`border-mgreen border-opacity-30 checked:border-mgreen`,
      disabled: tw`border-mgreen border-opacity-30 checked:border-mgreen bg-mgreen bg-opacity-30 cursor-not-allowed`,
    },
  };

  const baseStyle = tw`appearance-none relative rounded-full border-2 checked:bg-mario checked:border-gray-500 checked:bg-contain checked:border-4 focus:outline-none`;

  const disabledStyle = tw`bg-gray-200 text-gray-200 border-gray-200 cursor-not-allowed`;

  const getVariant = (color, disabled) => {
    if (color && disabled) {
      return colorMap[color].disabled;
    }
    if (color) {
      return colorMap[color].solid;
    }
    if (disabled) {
      return disabledStyle;
    }
  };

  styleOptions.push(getVariant(color, disabled));

  const RadioInput = styled.input`
    ${baseStyle}
    ${styleOptions}
  `;

  const labelBaseStyle = tw`flex items-center`;

  const labelStyleOptions = [];

  const labelColorMap = {
    yellow: tw`text-myellow`,
    red: tw`text-mred`,
    blue: tw`text-mblue`,
    green: tw`text-mgreen`,
  };

  labelStyleOptions.push(labelColorMap[color]);

  const RadioLabel = styled.span`
    ${labelBaseStyle}
    ${labelStyleOptions}
  `;

  const RadioContainer = styled.label`
    ${tw`flex items-center space-x-1 cursor-pointer p-2`}
  `;

  return (
    <RadioContainer className={className}>
      <RadioInput
        onChange={onChange}
        name={name || "radio"}
        value={value}
        type="radio"
        disabled={disabled}
        id={id}
        defaultChecked={defaultChecked}
      ></RadioInput>
      {label && <RadioLabel>{label}</RadioLabel>}
    </RadioContainer>
  );
};

export default Radio;

import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface RadioProps {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  isChecked?: boolean;
  onChange?: (value: any) => void;
  value?: string;
  defaultisChecked?: boolean;
}

const Radio = styled.input`
  ${tw`hidden`}
`;

const Label = styled.label`
  ${tw`flex items-center space-x-2 cursor-pointer`}
`;

const Indicator = styled.span<RadioProps>`
  ${({ variant, isChecked }) => {
    if (isChecked) {
      if (variant === "primary") {
        return tw`w-4 h-4 rounded-full bg-blue-500`;
      }
      if (variant === "secondary") {
        return tw`w-4 h-4 rounded-full bg-red-500`;
      }
      return tw`w-4 h-4 rounded-full bg-gray-500`;
    }
    return tw`w-4 h-4 rounded-full border border-gray-500`;
  }}
`;

const Text = styled.span<RadioProps>`
  ${({ size }) => {
    if (size === "sm") {
      return tw`text-sm`;
    }
    if (size === "lg") {
      return tw`text-lg`;
    }
    return tw`text-base`;
  }}
`;

const MyRadio: React.FunctionComponent<RadioProps> = ({
  variant = "default",
  size = "md",
  className,
  isChecked = false,
  onChange,
  value,
}) => {
  const handleInputChange = () => {
    if (onChange) {
      onChange(value || "");
    }
  };

  return (
    <Label className={className}>
      <Radio
        type="radio"
        // defaultisChecked={isChecked}
        onChange={handleInputChange}
      />
      <Indicator variant={variant} isChecked={isChecked} />
      <Text size={size}>Option</Text>
    </Label>
  );
};

export default MyRadio;

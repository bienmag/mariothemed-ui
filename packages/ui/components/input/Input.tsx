import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface InputProps {
  variant?: string;
  size?: string;
  className?: string | string[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
}

const baseStyle = tw`px-3 py-2 text-base rounded-lg text-black border-solid border border-gray-300 w-full focus:outline-none focus:border-gray-500`;

const styleOptions = [];

const Input = styled.input`
  ${baseStyle}
  ${styleOptions}
`;

const MyInput: React.FunctionComponent<InputProps> = ({
  variant,
  size,
  placeholder,
  onChange,
  value,
  color,
}) => {
  const sizeMap = {
    xs: tw`px-3 py-0 text-sm rounded-md`,
    sm: tw`px-3 py-1 text-base rounded-lg`,
    md: tw`px-3 py-2 text-base rounded-lg`,
    lg: tw`px-3 py-3 text-xl rounded-lg`,
  };

  styleOptions.push(sizeMap[size]);

  const colorMap = {
    yellow: tw`border-myellow focus:border-myellow focus:border-2  `,
    red: tw`border-mred focus:border-mred focus:border-2`,
    blue: tw`border-mblue focus:border-mblue focus:border-2`,
    green: tw`border-mgreen focus:border-mgreen focus:border-2`,
  };

  styleOptions.push(colorMap[color]);

  const variantMap = {
    outline: tw`border-solid border border-gray-200`,
    filled: tw`bg-gray-200 focus:bg-gray-100`,
    flushed: tw`px-3 rounded-none border-l-0 border-r-0 border-t-0 border-gray-200`,
    unstyled: tw`px-3 rounded-none border-0`,
  };

  styleOptions.push(variantMap[variant]);

  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default MyInput;

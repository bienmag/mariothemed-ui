import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface InputProps {
  variant?: string;
  className?: string | string[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  size?;
}

const baseStyle = tw`px-3 py-2 text-base rounded-lg text-black   border border-gray-300 w-full focus:outline-none focus:border-gray-500`;

const Input = styled.input<InputProps>`
  ${baseStyle}

  ${({ size }) => {
    const sizeMap = {
      xs: tw`px-3 py-0 text-sm rounded-md`,
      sm: tw`px-3 py-1 text-base rounded-lg`,
      md: tw`px-3 py-2 text-base rounded-lg`,
      lg: tw`px-3 py-3 text-xl rounded-lg`,
    };
    return sizeMap[size];
  }}
  
  ${({ color, variant }) => {
    const colorMap = {
      yellow: {
        outline: tw`border-myellow border-opacity-60 focus:border-myellow focus:border-2 placeholder-myellow text-myellow`,
        filled: tw`bg-myellowhover bg-opacity-10 focus:bg-transparent focus:border-myellow focus:border-solid border-transparent focus:border-2 placeholder-myellow text-myellow`,
        flushed: tw`focus:bg-transparent focus:border-l-0 focus:border-r-0 focus:border-t-0 bg-transparent px-3 rounded-none border-l-0 border-r-0 border-t-0 border-myellow focus:border-myellow focus:border-solid focus:border-2 border-opacity-60 placeholder-myellow text-myellow`,
        unstyled: tw`focus:bg-transparent focus:border-none bg-transparent px-3 rounded-none border-0 placeholder-myellow text-myellow`,
      },
      green: {
        outline: tw`border-mgreen border-opacity-60 focus:border-mgreen focus:border-2 placeholder-mgreen text-mgreen`,
        filled: tw`bg-mgreenhover bg-opacity-10 focus:bg-transparent focus:border-mgreen focus:border-solid border-transparent focus:border-2 placeholder-mgreen text-mgreen`,
        flushed: tw`focus:bg-transparent focus:border-l-0 focus:border-r-0 focus:border-t-0 bg-transparent px-3 rounded-none border-l-0 border-r-0 border-t-0 border-mgreen focus:border-mgreen focus:border-solid focus:border-2 border-opacity-60 placeholder-mgreen text-mgreen`,
        unstyled: tw`focus:bg-transparent focus:border-none bg-transparent px-3 rounded-none border-0 placeholder-mgreen text-mgreen`,
      },
      blue: {
        outline: tw`border-mblue border-opacity-60 focus:border-mblue focus:border-2 placeholder-mblue text-mblue`,
        filled: tw`bg-mbluehover bg-opacity-10 focus:bg-transparent focus:border-mblue focus:border-solid border-transparent focus:border-2 placeholder-mblue text-mblue`,
        flushed: tw`focus:bg-transparent focus:border-l-0 focus:border-r-0 focus:border-t-0 bg-transparent px-3 rounded-none border-l-0 border-r-0 border-t-0 border-mblue focus:border-mblue focus:border-solid focus:border-2 border-opacity-60 placeholder-mblue text-mblue`,
        unstyled: tw`focus:bg-transparent focus:border-none bg-transparent px-3 rounded-none border-0 placeholder-mblue text-mblue`,
      },
      red: {
        outline: tw`border-mred border-opacity-60 focus:border-mred focus:border-2 placeholder-mred text-mred`,
        filled: tw`bg-red-700 bg-opacity-10 focus:bg-transparent focus:border-mred focus:border-solid border-transparent focus:border-2 placeholder-mred text-mred`,
        flushed: tw`focus:bg-transparent focus:border-l-0 focus:border-r-0 focus:border-t-0 bg-transparent px-3 rounded-none border-l-0 border-r-0 border-t-0 border-mred focus:border-mred focus:border-solid focus:border-2 border-opacity-60 placeholder-mred text-mred`,
        unstyled: tw`focus:bg-transparent focus:border-none bg-transparent px-3 rounded-none border-0 placeholder-mred text-mred`,
      },
    };
    const variantMap = {
      outline: tw`px-3 py-2 text-base rounded-lg text-black border-solid border border-gray-300 w-full focus:border-gray-500`,
      filled: tw`focus:bg-transparent bg-gray-200  border-none focus:border-gray-500 focus:border-solid`,
      flushed: tw`focus:bg-transparent bg-transparent px-3 rounded-none border-l-0 border-r-0 border-t-0 border-gray-200`,
      unstyled: tw`focus:bg-transparent bg-transparent px-3 rounded-none border-0`,
    };

    const getVariantStyle = (variant, color) => {
      if (color && variant) {
        return colorMap[color]?.[variant];
      }
      if (color) {
        return colorMap[color]?.["solid"];
      }
      if (variant) {
        return variantMap[variant];
      }
      return null;
    };

    return getVariantStyle(variant, color);
  }}
`;

const MyInput: React.FunctionComponent<InputProps> = ({
  variant,
  size,
  placeholder,
  onChange,
  value,
  color,
}) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      color={color}
      variant={variant}
      size={size}
    />
  );
};

export default MyInput;

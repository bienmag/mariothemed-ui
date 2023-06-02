import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

type ButtonSize = "xs" | "sm" | "md" | "lg";
export interface ButtonProps {
  children: string | React.ReactElement | React.ReactElement[];
  color?: string;
  size?: ButtonSize;
  variant?: "outline" | "solid" | "ghost" | "link";
  className?: string;
}

const MyButton: React.FunctionComponent<ButtonProps> = ({
  children,
  // color,
  size,
  variant,
  className,
  // isDisabled,
  ...props
}) => {
  const styleOptions = [];

  const sizeMap = {
    xs: tw`px-4 py-1 text-xs`,
    sm: tw`px-6 py-2 text-sm`,
    md: tw`px-7 py-3 text-base`,
    lg: tw`px-8 py-4 text-lg`,
  };

  styleOptions.push(sizeMap[size]);

  const variantMap = {
    outline: tw` bg-white text-yellow-800 border-solid border border-yellow-800 hover:bg-gray-100`,
    solid: tw` rounded-xl text-white bg-yellow-800 border-solid border border-gray-300 hover:bg-yellow-900`,
    ghost: tw`  border-none bg-white text-yellow-800 hover:bg-gray-100`,
    link: tw` border-none bg-white text-yellow-800 hover:bg-white hover:underline`,
  };

  styleOptions.push(variantMap[variant]);

  // if (colorScheme === "blue") {
  //   styleOptions.push("button-blue");
  // }

  const baseStyle = tw` px-7 py-3 text-base rounded-xl text-white bg-myellow border-solid border border-gray-400 hover:bg-yellow-900 `;

  const Button = styled.button`
    ${baseStyle}
  `;

  return (
    <>
      <Button className="font-mario" css={styleOptions}>
        {children}
      </Button>
    </>
  );
};

export default MyButton;

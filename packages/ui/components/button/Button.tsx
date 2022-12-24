import "./Button.css";

import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

type ButtonSize = "xs" | "sm" | "md" | "lg";
export interface ButtonProps {
  children: string | React.ReactElement | React.ReactElement[];
  color?: string;
  size?: ButtonSize;
  variant?: "outline" | "solid" | "ghost" | "link";
  // className?: string | string[];
  // css?: object;
  // isDisabled?: boolean;
}

const MyButton: React.FunctionComponent<ButtonProps> = ({
  children,
  // color,
  size,
  variant,
  // isDisabled,
  ...props
}) => {
  const styleOptions = [];

  // .button-xs {
  //   @apply px-4 py-1 text-xs;
  // }

  // .button-sm {
  //   @apply px-6 py-2 text-sm;
  // }

  // .button-md {
  //   @apply px-7 py-3 text-base;
  // }

  // .button-lg {
  //   @apply px-8 py-4 text-lg;
  // }

  const sizeMap = {
    xs: tw`px-4 py-1 text-xs`,
    sm: tw`px-6 py-2 text-sm`,
    md: tw`px-7 py-3 text-base`,
    lg: tw`px-8 py-4 text-lg`,
  };

  styleOptions.push(sizeMap[size]);

  const variantMap = {
    outline: tw`border border-blue-500 text-blue-500`,
    solid: tw`bg-blue-500 text-white`,
    ghost: tw`bg-transparent text-blue-500`,
    link: tw`text-blue-500`,
  };

  styleOptions.push(variantMap[variant]);

  // if (colorScheme === "blue") {
  //   styleOptions.push("button-blue");
  // }

  const baseStyle = tw`bg-blue-500 text-white font-bold py-2 px-4 rounded`;

  // const buttonClass = css`
  //   ${tw`bg-blue-500 text-white font-bold py-2 px-4 rounded`}
  // `;

  const Button = styled.button`
    ${baseStyle}
  `;

  return <Button css={styleOptions}>{children}</Button>;
};

export default MyButton;

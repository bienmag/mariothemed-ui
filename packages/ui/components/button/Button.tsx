import styled from "@emotion/styled";
import React from "react";
import tw, { css } from "twin.macro";

type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps {
  children?: string;
  color?: string;
  size?: ButtonSize;
  variant?: "outline" | "solid" | "ghost" | "link" | "logo";
  rightIcon?;
  leftIcon?;
  className?: string;
  height?: string;
  width?: string;
  borderWidth?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  variant,
  rightIcon,
  leftIcon,
  className,
  height,
  width,
  borderWidth,
}) => {
  const styleOptions = [];

  const heightStyle = height
    ? css`
        height: ${height};
      `
    : null;
  const widthStyle = width
    ? css`
        width: ${width};
      `
    : null;
  const borderWidthStyle = borderWidth
    ? css`
        border-width: ${borderWidth};
      `
    : null;

  const sizeMap = {
    xs: tw`px-4 py-1 text-xs`,
    sm: tw`px-6 py-2 text-sm`,
    md: tw`px-7 py-3 text-base`,
    lg: tw`px-8 py-4 text-lg`,
  };

  styleOptions.push(sizeMap[size], heightStyle, widthStyle, borderWidthStyle);

  const colorMap = {
    yellow: {
      solid: tw`bg-myellow hover:bg-myellowhover text-white`,
      outline: tw`bg-transparent text-myellow border-2 border-myellow hover:bg-myellow hover:bg-opacity-20`,
      ghost: tw`bg-transparent border-none text-myellow hover:bg-myellow hover:bg-opacity-20`,
      link: tw`bg-transparent border-none text-myellow hover:bg-transparent hover:underline`,
    },
    green: {
      solid: tw`bg-mgreen hover:bg-mgreenhover text-white`,
      outline: tw`bg-transparent text-mgreen border-2 border-mgreen hover:bg-mgreen hover:bg-opacity-20`,
      ghost: tw`bg-transparent border-none text-mgreen hover:bg-mgreen hover:bg-opacity-20`,
      link: tw`bg-transparent border-none text-mgreen hover:bg-transparent hover:underline`,
    },
    blue: {
      solid: tw`bg-mblue hover:bg-mbluehover text-white`,
      outline: tw`bg-transparent text-mblue border-2 border-mblue hover:bg-mblue hover:bg-opacity-20`,
      ghost: tw`bg-transparent border-none text-mblue hover:bg-mblue hover:bg-opacity-20`,
      link: tw`bg-transparent border-none text-mblue hover:bg-transparent hover:underline`,
    },
    red: {
      solid: tw`bg-mred hover:bg-red-700 text-white`,
      outline: tw`bg-transparent text-mred border-2 border-mred hover:bg-mred hover:bg-opacity-20`,
      ghost: tw`bg-transparent border-none text-mred hover:bg-mred hover:bg-opacity-20`,
      link: tw`bg-transparent border-none text-mred hover:bg-transparent hover:underline`,
    },
  };

  const variantMap = {
    solid: css`
      ${tw`px-7 py-3 text-base rounded-xl text-gray-600 border-solid border border-gray-200 hover:bg-gray-300`}
      ${({ color }) => color && colorMap[color]?.solid}
    `,
    outline: css`
      ${tw`bg-transparent text-gray-600 border-solid border border-gray-300 hover:bg-gray-200`}
      ${({ color }) => color && colorMap[color]?.outline}
    `,
    ghost: tw`border-none bg-transparent text-gray-600 hover:bg-gray-200`,
    link: tw`border-none bg-transparent text-gray-400 hover:bg-transparent hover:underline`,
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

  styleOptions.push(getVariantStyle(variant, color));

  const baseStyle = tw`font-mario px-7 py-3 text-base rounded-md text-gray-600 bg-gray-200 border-solid border border-gray-200 hover:bg-gray-300`;

  const Button = styled.button`
    ${baseStyle}
    ${styleOptions}
  `;

  const IconWrapper = styled.span`
    ${tw`mx-2`};
  `;

  return (
    <Button className={className}>
      <div className="flex items-center">
        {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
        {children}
        {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
      </div>
    </Button>
  );
};

export default Button;

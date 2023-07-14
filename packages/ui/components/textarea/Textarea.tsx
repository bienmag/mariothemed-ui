import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface TextareaProps {
  placeholder?: string;
  resize?: string;
  color?: string;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const baseStyle = tw`px-3 py-2 text-base rounded-lg text-black border border-gray-300 w-full focus:outline-none focus:border-gray-500`;

const resizeMap = {
  none: tw`resize-none`,
  both: tw`resize`,
  horizontal: tw`resize-x`,
  vertical: tw`resize-y h-16`,
};

const colorMap = {
  yellow: tw`border-myellow focus:border-2 focus:border-myellow placeholder-myellow placeholder-opacity-30 text-myellow`,
  green: tw`border-mgreen focus:border-2 focus:border-mgreen placeholder-mgreen placeholder-opacity-30 text-mgreen`,
  blue: tw`border-mblue focus:border-2 focus:border-mblue placeholder-mblue placeholder-opacity-30 text-mblue`,
  red: tw`border-mred focus:border-2 focus:border-mred placeholder-mred placeholder-opacity-30 text-mred`,
};

const MyTextarea = styled.textarea<TextareaProps>`
  ${baseStyle}
  min-height: 4rem;

  ${({ resize }) => resizeMap[resize]}
  ${({ color }) => colorMap[color]}

  ${({ isDisabled }) =>
    isDisabled &&
    tw`cursor-pointer bg-gray-300 pointer-events-none resize-none`}
`;

const Textarea: React.FunctionComponent<TextareaProps> = ({
  placeholder,
  color,
  resize,
  isDisabled,
  onChange,
  ...props
}) => {
  return (
    <MyTextarea
      placeholder={placeholder}
      resize={resize}
      isDisabled={isDisabled}
      onChange={onChange}
      color={color}
    />
  );
};

export default Textarea;

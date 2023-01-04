import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface TextareaProps {
  placeholder?: string;
  resize?: string;
  color?: string;
  disabled?: boolean;
}

const MyTextarea: React.FunctionComponent<TextareaProps> = ({
  placeholder,
  resize,
  disabled,
  ...props
}) => {
  const styleOptions = [];

  const resizeMap = {
    none: tw`resize-none`,
    both: tw`resize`,
    horizontal: tw`resize-x`,
  };

  styleOptions.push(resizeMap[resize]);

  // const ableMap = {
  //   disabled: tw`bg-gray-200 text-gray-200 border-gray-200 cursor-not-allowed`
  // }

  // styleOptions.push(ableMap[disabled])

  //add controlled textarea

  const baseStyle = tw`p-4 bg-gray-100 text-black h-16 max-w-min
  border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-900 resize-y`;

  const Textarea = styled.textarea`
    ${baseStyle}
  `;

  return (
    <Textarea
      {...props}
      placeholder={placeholder}
      disabled={disabled}
      css={styleOptions}
    ></Textarea>
  );
};

export default MyTextarea;

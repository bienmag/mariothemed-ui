import styled from "@emotion/styled";
import React, { useState } from "react";
import tw from "twin.macro";

export interface InputProps {
  // children: React.ReactElement | React.ReactElement[];
  variant?: string;
  size?: string;
  className?: string | string[];
  placeholder?: string;
  value?: string;
  onChange?: string;
  myText?: string;

  // isDisabled?: boolean;
}
const MyInput: React.FunctionComponent<InputProps> = ({
  variant,
  size,
  placeholder,
  ...props
}) => {
  const styleOptions = [];

  const sizeMap = {
    xs: tw`px-1 py-0 text-sm rounded-md`,
    sm: tw`px-2 py-1 text-base rounded-lg`,
    md: tw`px-3 py-2 text-base rounded-lg`,
    lg: tw`px-4 py-3 text-xl rounded-lg`,
  };

  styleOptions.push(sizeMap[size]);

  const variantMap = {
    outline: tw`border-solid border border-gray-200`,
    filled: tw`bg-gray-200 focus:bg-gray-100`,
    flushed: tw`px-1 rounded-none border-l-0 border-r-0 border-t-0 border-gray-200`,
    unstyled: tw`px-1 rounded-none border-0`,
  };

  styleOptions.push(variantMap[variant]);

  //controlled input!!!!!!!!!! - ADD

  //invalid input

  //disapled input

  const baseStyle = tw`px-3 py-2 text-base rounded-lg text-black border-solid border border-gray-300 w-full focus:outline-none focus:border-gray-500`;
  const Input = styled.input`
    ${baseStyle}
  `;

  const [myText, setMyText] = useState();

  function HandleChange(e) {
    setMyText(e.target.value);
  }

  return (
    <Input
      type="text"
      placeholder={placeholder}
      css={styleOptions}
      onChange={HandleChange}
      value={myText}
    ></Input>
  );
};

export default MyInput;

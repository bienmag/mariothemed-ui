import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

export interface RadioProps {
  variant?: string;
  size?: string;
  className?: string | string[];
}

const MyRadio: React.FunctionComponent<RadioProps> = ({
  variant,
  size,
  ...props
}) => {
  const styleOptions = [];

  const baseStyle = tw`px-3 py-2 text-base rounded-lg text-black border-solid border border-gray-300 w-full focus:outline-none focus:border-gray-500`;
  const Radio = styled.input`
    ${baseStyle}
  `;

  return (
    <Radio css={styleOptions} type="checkbox">
      {" "}
    </Radio>
  );
};

export default MyRadio;

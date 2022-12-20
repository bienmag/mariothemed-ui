import "./Button.css";

import { css, cx } from "@emotion/css";
import React from "react";
import tw from "tailwind.macro";
import xw from "xwind";

export interface ButtonProps {
  children: string | React.ReactElement | React.ReactElement[];
  color?: string;
  size?: string;
  variant?: string;
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
  // const rootButton = ["button"];

  const styles = css`
    ${xw`bg-blue-500 text-white font-bold py-2 px-4 rounded`}
  `;

  // if (size === "xs") {
  //   rootButton.push("button-xs");
  // }
  // if (size === "sm") {
  //   rootButton.push("button-sm");
  // }
  // if (size === "md") {
  //   rootButton.push("button-md");
  // }
  // if (size === "lg") {
  //   rootButton.push("button-lg");
  // }

  // if (variant === "solid") {
  //   rootButton.push("button-solid");
  // }

  // if (variant === "outline") {
  //   rootButton.push("button-outline");
  // }

  // if (variant === "ghost") {
  //   rootButton.push("button-ghost");
  // }

  // if (variant === "link") {
  //   rootButton.push("button-link");
  // }

  // if (colorScheme === "blue") {
  //   rootButton.push("button-blue");
  // }

  return (
    <button
      {...props}
      className={cx(styles)}

      //   className={`
      //   ${rootButton.join(" ")}
      // style = {{color}}
      //  }`}
    >
      {children}
    </button>
  );
};

export default MyButton;

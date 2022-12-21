import "./Button.css";
import "tailwindcss/dist/base.min.css";

import React from "react";
import tw from "twin.macro";
export interface ButtonProps {
  children: string | React.ReactElement | React.ReactElement[];
  color?: string;
  size?: string;
  variant?: string;
  // className?: string | string[];
  // css?: object;
  // isDisabled?: boolean;
}

const MyHeading = tw.h1`text-blue-500 text-2xl`;

const MyButton: React.FunctionComponent<ButtonProps> = ({
  children,
  // color,
  size,
  variant,
  // isDisabled,
  ...props
}) => {
  // const rootButton = ["button"];

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
    <MyHeading>hellloooo</MyHeading>
    // <button
    //   {...props}

    //   className={`
    //   ${rootButton.join(" ")}
    // style = {{color}}
    //  }`}
    // >
    // {/* {children}
    // </button > */}
  );
};

export default MyButton;

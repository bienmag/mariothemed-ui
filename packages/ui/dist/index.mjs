// components/button/Button.tsx
import "tailwindcss/dist/base.min.css";
import tw from "twin.macro";
import { jsx } from "@emotion/react/jsx-runtime";
var MyHeading = tw.h1`text-blue-500 text-2xl`;
var MyButton = ({ children, size, variant, ...props }) => {
  return /* @__PURE__ */ jsx(MyHeading, { children: "hellloooo" });
};
var Button_default = MyButton;

// components/checkbox/Checkbox.tsx
import { jsx as jsx2 } from "@emotion/react/jsx-runtime";
var MyCheckbox = ({ size, color, ...props }) => {
  const rootCheckbox = ["checkbox"];
  if (size === "xs") {
    rootCheckbox.push("checkbox-xs");
  }
  if (size === "md") {
    rootCheckbox.push("checkbox-md");
  }
  if (size === "lg") {
    rootCheckbox.push("checkbox-lg");
  }
  if (color === "green") {
    rootCheckbox.push("checkbox-green");
  }
  return /* @__PURE__ */ jsx2("input", {
    ...props,
    className: `${rootCheckbox.join(" ")}`,
    type: "checkbox",
  });
};
var Checkbox_default = MyCheckbox;

// components/input/Input.tsx
import { jsx as jsx3 } from "@emotion/react/jsx-runtime";
var MyInput = ({ variant, size, placeholder, ...props }) => {
  const rootInput = ["input"];
  if (size === "xs") {
    rootInput.push("input-xs");
  }
  if (size === "sm") {
    rootInput.push("input-sm");
  }
  if (size === "md") {
    rootInput.push("input-md");
  }
  if (size === "lg") {
    rootInput.push("input-lg");
  }
  if (variant === "outline") {
    rootInput.push("input-outline");
  }
  if (variant === "filled") {
    rootInput.push("input-filled");
  }
  if (variant === "flushed") {
    rootInput.push("input-flushed");
  }
  if (variant === "unstyled") {
    rootInput.push("input-unstyled");
  }
  return /* @__PURE__ */ jsx3("input", {
    ...props,
    type: "text",
    placeholder,
    className: `
  ${rootInput.join(" ")}`,
  });
};
var Input_default = MyInput;

// components/textarea/Textarea.tsx
import { jsx as jsx4 } from "@emotion/react/jsx-runtime";
var MyTextarea = ({ placeholder, resize, disabled, ...props }) => {
  const rootTextarea = ["textarea"];
  if (resize === "none") {
    rootTextarea.push("textarea-none");
  }
  if (resize === "both") {
    rootTextarea.push("textarea-both");
  }
  if (resize === "vertical") {
    rootTextarea.push("textarea-horizontal");
  }
  if (disabled) {
    rootTextarea.push("textarea-disabled");
  }
  return /* @__PURE__ */ jsx4("textarea", {
    ...props,
    placeholder,
    disabled,
    className: `
    ${rootTextarea.join(" ")}`,
  });
};
var Textarea_default = MyTextarea;
export {
  Button_default as MyButton,
  Checkbox_default as MyCheckbox,
  Input_default as MyInput,
  Textarea_default as MyTextarea,
};

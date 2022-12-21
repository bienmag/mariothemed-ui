var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var ui_exports = {};
__export(ui_exports, {
  MyButton: () => Button_default,
  MyCheckbox: () => Checkbox_default,
  MyInput: () => Input_default,
  MyTextarea: () => Textarea_default,
});
module.exports = __toCommonJS(ui_exports);

// components/button/Button.tsx
var import_base_min = require("tailwindcss/dist/base.min.css");
var import_twin = __toESM(require("twin.macro"));
var import_jsx_runtime = require("@emotion/react/jsx-runtime");
var MyHeading = import_twin.default.h1`text-blue-500 text-2xl`;
var MyButton = ({ children, size, variant, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyHeading, {
    children: "hellloooo",
  });
};
var Button_default = MyButton;

// components/checkbox/Checkbox.tsx
var import_jsx_runtime2 = require("@emotion/react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
    ...props,
    className: `${rootCheckbox.join(" ")}`,
    type: "checkbox",
  });
};
var Checkbox_default = MyCheckbox;

// components/input/Input.tsx
var import_jsx_runtime3 = require("@emotion/react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", {
    ...props,
    type: "text",
    placeholder,
    className: `
  ${rootInput.join(" ")}`,
  });
};
var Input_default = MyInput;

// components/textarea/Textarea.tsx
var import_jsx_runtime4 = require("@emotion/react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", {
    ...props,
    placeholder,
    disabled,
    className: `
    ${rootTextarea.join(" ")}`,
  });
};
var Textarea_default = MyTextarea;
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    MyButton,
    MyCheckbox,
    MyInput,
    MyTextarea,
  });

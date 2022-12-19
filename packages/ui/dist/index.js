var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var MyButton = ({ children, size, variant, ...props }) => {
  const rootButton = ["button"];
  if (size === "xs") {
    rootButton.push("button-xs");
  }
  if (size === "sm") {
    rootButton.push("button-sm");
  }
  if (size === "md") {
    rootButton.push("button-md");
  }
  if (size === "lg") {
    rootButton.push("button-lg");
  }
  if (variant === "solid") {
    rootButton.push("button-solid");
  }
  if (variant === "outline") {
    rootButton.push("button-outline");
  }
  if (variant === "ghost") {
    rootButton.push("button-ghost");
  }
  if (variant === "link") {
    rootButton.push("button-link");
  }
  return (
    <button
      {...props}
      className={`
      ${rootButton.join(" ")}
    style = {{color}}
     }`}
    >
      {children}
    </button>
  );
};
var Button_default = MyButton;

// components/checkbox/Checkbox.tsx
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
  return (
    <input {...props} className={`${rootCheckbox.join(" ")}`} type="checkbox" />
  );
};
var Checkbox_default = MyCheckbox;

// components/input/Input.tsx
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
  return (
    <input
      {...props}
      type="text"
      placeholder={placeholder}
      className={`
  ${rootInput.join(" ")}`}
    />
  );
};
var Input_default = MyInput;

// components/textarea/Textarea.tsx
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
  return (
    <textarea
      {...props}
      placeholder={placeholder}
      disabled={disabled}
      className={`
    ${rootTextarea.join(" ")}`}
    />
  );
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

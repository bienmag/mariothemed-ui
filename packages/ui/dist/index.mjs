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
export {
  Button_default as MyButton,
  Checkbox_default as MyCheckbox,
  Input_default as MyInput,
  Textarea_default as MyTextarea,
};

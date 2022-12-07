import "./Textarea.css";

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
    // eslint-disable-next-line prettier/prettier
    <textarea
      {...props}
      placeholder={placeholder}
      disabled={disabled}
      className={`
    ${rootTextarea.join(" ")}`}
    ></textarea>
  );
};

export default MyTextarea;

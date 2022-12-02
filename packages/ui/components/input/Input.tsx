import "./Input.css";

export interface InputProps {
  children: React.ReactElement | React.ReactElement[];
  size?: string;
  className?: string | string[];
  // isDisabled?: boolean;
}
const MyInput: React.FunctionComponent<InputProps> = ({
  children,
  size,
  ...props
}) => {
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

  return (
    <input
      {...props}
      type="text"
      placeholder="type your text here"
      className={`
  ${rootInput.join(" ")}`}
    ></input>
  );
};

export default MyInput;

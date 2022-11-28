import { MyButton } from "ui";

export default function Web() {
  return (
    <div>
      {/* <h1 className="text-5xl mx-5 text-indigo-700">Web</h1> */}

      <MyButton>
        <span> Button</span>
      </MyButton>
      <MyButton size={"xs"} variant={"outline"}>
        <span> Button</span>
      </MyButton>
      <MyButton size={"sm"} variant={"ghost"}>
        <span> Button</span>
      </MyButton>
      <MyButton size={"md"} variant={"solid"}>
        <span> Button</span>
      </MyButton>
      <MyButton size={"lg"} variant={"link"}>
        <span> Button</span>
      </MyButton>
    </div>
  );
}

import { MyButton, MyInput } from "ui";

export default function Web() {
  return (
    <div>
      {/* <h1 className="text-5xl mx-5 text-indigo-700">Web</h1> */}

      <MyButton>
        <span> Button</span>
      </MyButton>
      <MyButton size="xs" variant="outline">
        <span> Button</span>
      </MyButton>
      <MyButton size="sm" variant="outline">
        <span> Button</span>
      </MyButton>
      <MyButton size="md">
        <span> Button</span>
      </MyButton>
      <MyButton size="lg">
        <span> Button</span>
      </MyButton>
      <MyInput></MyInput>

      <MyInput size="xs"></MyInput>

      <MyInput size="sm"></MyInput>

      <MyInput size="md"></MyInput>

      <MyInput size="lg" variant="outline"></MyInput>
    </div>
  );
}

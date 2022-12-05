import { MyButton, MyCheckbox, MyInput } from "ui";

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

      <MyInput size="xs" placeholder="extra small size"></MyInput>

      <MyInput size="sm" variant="unstyled" placeholder="small size"></MyInput>

      <MyInput size="md" variant="filled" placeholder="medium size"></MyInput>

      <MyInput size="lg" variant="flushed" placeholder="large size"></MyInput>
      <MyCheckbox></MyCheckbox>
      <MyCheckbox size="xs"></MyCheckbox>
      <MyCheckbox size="md"></MyCheckbox>
      <MyCheckbox size="lg"></MyCheckbox>
      <MyCheckbox size="xs" color="green"></MyCheckbox>
      <MyCheckbox size="md" color="green"></MyCheckbox>
      <MyCheckbox size="lg" color="green"></MyCheckbox>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Checkbox, MyInput } from "tailwind-simba-ui";

function Page() {
  const [value, setValue] = useState();

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <Checkbox color="yellow" size="lg"></Checkbox>
      <Checkbox color="green" size="xs"></Checkbox>
      <Checkbox color="red" size="md"></Checkbox>
      <Checkbox color="blue" defaultChecked disabled size="lg"></Checkbox>
      <p>value: {value}</p>
      <MyInput
        placeholder="hello"
        size="md"
        color="red"
        variant="outline"
      ></MyInput>
      <MyInput
        placeholder="hello"
        size="xs"
        color="red"
        variant="filled"
      ></MyInput>
      <MyInput placeholder="hello" color="red" variant="flushed"></MyInput>
      <MyInput placeholder="hello" color="red" variant="unstyled"></MyInput>
    </div>
  );
}

export default Page;

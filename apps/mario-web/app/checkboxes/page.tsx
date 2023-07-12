"use client";
import { useState } from "react";
import { Checkbox, MyInput } from "tailwind-simba-ui";

function Page() {
  const [value, setValue] = useState();

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <Checkbox color="yellow" size="lg"></Checkbox>
      <Checkbox color="green" size="lg"></Checkbox>
      <Checkbox color="red" size="lg"></Checkbox>
      <Checkbox color="blue" defaultChecked disabled size="lg"></Checkbox>
      <p>value: {value}</p>
      <MyInput placeholder="hello" color="blue"></MyInput>
      <MyInput placeholder="hello" color="red"></MyInput>
    </div>
  );
}

export default Page;

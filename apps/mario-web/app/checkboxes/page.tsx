"use client";
import { useState } from "react";
import { Checkbox, MyRadio, Textarea } from "tailwind-simba-ui";

function Page() {
  const [value, setValue] = useState();
  const [resize, setResize] = useState("horizontal");

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <MyRadio defaultChecked size="md"></MyRadio>
      <MyRadio color="yellow" disabled size="sm"></MyRadio>
      <MyRadio size="md"></MyRadio>
      <MyRadio size="lg"></MyRadio>
      <MyRadio size="sm" color="yellow"></MyRadio>
      <MyRadio></MyRadio>
    </div>
  );
}

export default Page;

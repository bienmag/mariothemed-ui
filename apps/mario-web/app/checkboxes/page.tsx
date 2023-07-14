"use client";
import { useState } from "react";
import { Checkbox, Textarea } from "tailwind-simba-ui";

function Page() {
  const [value, setValue] = useState();
  const [resize, setResize] = useState("horizontal");

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <p> value : {value}</p>
      <Textarea
        color="green"
        resize={resize}
        placeholder="text area"
      ></Textarea>
      <Checkbox color="yellow" size="lg"></Checkbox>
    </div>
  );
}

export default Page;

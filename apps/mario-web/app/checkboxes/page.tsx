"use client";
import { useState } from "react";
import { Checkbox, MyTextarea } from "tailwind-simba-ui";

function Page() {
  const [value, setValue] = useState();

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <p> value : {value}</p>
      <MyTextarea
        color="green"
        resize="vertical"
        placeholder="text area"
      ></MyTextarea>
      <Checkbox color="yellow" size="lg"></Checkbox>
    </div>
  );
}

export default Page;

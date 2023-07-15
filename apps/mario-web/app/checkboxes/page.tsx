"use client";
import { useState } from "react";
import { Checkbox, Radio, Textarea } from "tailwind-simba-ui";

function Page() {
  const [newvalue, setValue] = useState("1");
  const [resize, setResize] = useState("horizontal");

  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <p> value: {newvalue}</p>
        <Radio
          onChange={() => setValue("1")}
          value="1"
          label="hello"
          color="green"
          defaultChecked
          size="md"
        />
        <Radio
          onChange={() => setValue("2")}
          value="2"
          label="done"
          id="second"
          color="blue"
          size="sm"
        ></Radio>
        <Radio
          onChange={() => setValue("3")}
          value="3"
          color="red"
          size="md"
        ></Radio>
        <Radio color="yellow" size="lg"></Radio>
        <Radio size="sm" color="blue"></Radio>
      </form>
      <div></div>
    </div>
  );
}

export default Page;

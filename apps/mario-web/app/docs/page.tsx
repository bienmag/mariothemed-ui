"use client";

import {
  MyButton,
  MyCheckbox,
  MyInput,
  MyRadio,
  MyTextarea,
} from "@/lib/simba-ui";
import { SetStateAction, useState } from "react";

export default function Docs() {
  // const [value, setValue] = useState("")
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const [selectedValue, setSelectedValue] = useState("1");

  const handleRadioChange = (value) => {
    setSelectedValue((prevValue) => (prevValue === value ? "" : value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-mario"> hello</p>
      <MyButton>Click me</MyButton>
      <MyButton variant="outline">Click me</MyButton>
      <MyButton variant="solid">Click me</MyButton>
      <MyButton variant="ghost">Click me</MyButton>
      <MyButton variant="link">Click me</MyButton>
      <MyButton variant="logo">Hello</MyButton>
      CHECKBOX
      <MyCheckbox size="md" color="green" disabled={false}></MyCheckbox>
      TEXTAREA
      <MyTextarea></MyTextarea>
      INPUT
      {/* <div>Value: {value}</div>
      <MyInput
        value={value}
        onChange={handleChange}
        placeholder="Type something"
      ></MyInput> */}
      RADIO
      <div>
        <MyRadio
          variant="primary"
          size="sm"
          value="1"
          checked={selectedValue === "1"}
          onChange={handleRadioChange}
        />
        <MyRadio
          variant="primary"
          size="sm"
          value="2"
          checked={selectedValue === "2"}
          onChange={handleRadioChange}
        />
        <MyRadio
          variant="primary"
          size="sm"
          value="3"
          checked={selectedValue === "3"}
          onChange={handleRadioChange}
        />
      </div>
      TEXTAREA
      <MyTextarea></MyTextarea>
    </main>
  );
}

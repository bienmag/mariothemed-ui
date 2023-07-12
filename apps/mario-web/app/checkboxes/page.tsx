"use client";
import { Checkbox } from "tailwind-simba-ui";

function Page() {
  return (
    <div className="bg-white font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <Checkbox color="yellow" size="lg"></Checkbox>
      <Checkbox color="green" size="lg"></Checkbox>
      <Checkbox color="red" size="lg"></Checkbox>
      <Checkbox color="blue" defaultChecked disabled size="lg"></Checkbox>
    </div>
  );
}

export default Page;

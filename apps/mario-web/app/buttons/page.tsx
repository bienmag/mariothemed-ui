import { MyButton } from "@/lib/simba-ui";
import { CiMail } from "react-icons/ci";

import logo from "./mario.png";
export default function Docs() {
  return (
    <div className="font-mario flex min-h-screen flex-col items-center justify-between p-24">
      <p> WELCOME TO MARIO BUTTONS</p>
      <p> Here you can find all the buttons we have in the ui library</p>
      <MyButton color="yellow" variant="outline" leftIcon={<CiMail />}>
        Click me
      </MyButton>
      <MyButton rightIcon={<CiMail />} size="xs" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<CiMail />} size="sm" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<CiMail />} size="md" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<CiMail />} size="lg" color="yellow">
        Click me
      </MyButton>
      <MyButton color="yellow" variant="solid">
        Click me
      </MyButton>
      <MyButton color="yellow" variant="outline">
        Click me
      </MyButton>
      <MyButton color="yellow" variant="ghost">
        Click me
      </MyButton>
      <MyButton color="yellow" variant="link">
        Click me
      </MyButton>
      customize:
      <MyButton
        rightIcon={<CiMail />}
        className="text-lg w-40 h-20 flex justify-center items-center"
        size="xs"
        color="yellow"
      >
        Click me
      </MyButton>
      customize 2:
      <MyButton rightIcon={<CiMail />} size="xs" height="120px" color="yellow">
        Click me
      </MyButton>
    </div>
  );
}

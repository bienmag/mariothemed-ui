import { MyButton } from "@/lib/simba-ui";
import { FaBeer } from "react-icons/fa";

export default function Docs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-mario"> WELCOME TO BUTTONS</p>
      <MyButton color="yellow" variant="outline" leftIcon={<FaBeer />}>
        Click me
      </MyButton>
      <MyButton rightIcon={<FaBeer />} size="xs" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<FaBeer />} size="sm" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<FaBeer />} size="md" color="yellow">
        Click me
      </MyButton>
      <MyButton rightIcon={<FaBeer />} size="lg" color="yellow">
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
    </div>
  );
}

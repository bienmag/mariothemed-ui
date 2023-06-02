import { MyButton } from "@/lib/simba-ui";

export default function Docs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="font-mario"> hello</p>
      <MyButton>Click me</MyButton>
      <MyButton variant="outline">Click me</MyButton>
      <MyButton variant="solid">Click me</MyButton>
      <MyButton variant="ghost">Click me</MyButton>
      <MyButton variant="link">Click me</MyButton>
    </main>
  );
}

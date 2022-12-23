import { Button, Icon } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button text="Hey!" onClick={() => alert("sup!")} />
      <Icon iconName="home" />
    </div>
  );
}

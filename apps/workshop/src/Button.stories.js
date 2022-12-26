import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "ui";

const Template = (args) => _jsx(Button, Object.assign({}, args));
export const SampleButton = Template.bind({});
SampleButton.args = {
  text: "Test",
  onClick: () => alert("Test!"),
};
export default {
  title: "Button",
  component: Button,
};

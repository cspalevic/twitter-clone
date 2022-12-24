import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "ui";

type ButtonType = typeof Button;
type ButtonStory = ComponentStory<ButtonType>;
type ButtonMeta = ComponentMeta<ButtonType>;

const Template: ButtonStory = (args) => <Button {...args} />;

export const SampleButton = Template.bind({});
SampleButton.args = {
  text: "Test",
  onClick: () => alert("Test!"),
};

export default {
  title: "Button",
  component: Button,
} as ButtonMeta;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "ui";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SampleButton = Template.bind({});
SampleButton.args = {
  text: "Test",
  onClick: () => alert("Test!"),
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "ui";

export default {
  title: "Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "home",
};

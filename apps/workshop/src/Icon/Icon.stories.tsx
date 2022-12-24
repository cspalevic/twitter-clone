import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "ui";
import styles from "./Icon.module.css";

type IconType = typeof Icon;
type IconStory = ComponentStory<IconType>;
type IconMeta = ComponentMeta<IconType>;

const Template: IconStory = (args) => <Icon {...args} />;

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "Home",
};

export const IconWithExtraStyles = Template.bind({});
IconWithExtraStyles.args = {
  iconName: "MoreOutlined",
  size: "lg",
  className: styles.extraClasses,
};

export default {
  title: "Icons",
  component: Icon,
} as IconMeta;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar, Icon } from "ui";
import styles from "./Avatar.module.css";

type AvatarType = typeof Avatar;
type AvatarMeta = ComponentMeta<AvatarType>;

export const IconExample = () => {
  return (
    <Avatar className={styles.iconExample}>
      <Icon className={styles.iconFill} iconName="Bookmark" />
    </Avatar>
  );
};

export default {
  title: "Avatar",
  component: Avatar,
} as AvatarMeta;

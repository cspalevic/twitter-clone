import { ComponentMeta } from "@storybook/react";
import { Avatar, Icon } from "ui";
import styles from "./Avatar.module.css";

type AvatarType = typeof Avatar;
type AvatarMeta = ComponentMeta<AvatarType>;

export const AvatarWithIcon = () => (
  <Avatar className={styles.iconExample}>
    <Icon className={styles.iconFill} iconName="Bookmark" />
  </Avatar>
);

export const AvatarWithImage = () => (
  <Avatar>
    <img
      src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
      width={100}
      height={100}
    />
  </Avatar>
);

export default {
  title: "Avatar",
  component: Avatar,
} as AvatarMeta;

import { ReactNode } from "react";
import { Avatar, Button, MenuItem, Text } from "ui";
import styles from "./RecommendedFollow.module.css";

export type RecommendedFollowProps = {
  avatarImage: ReactNode;
  name: string;
  handle: string;
};

export const RecommendedFollow = ({
  avatarImage,
  name,
  handle,
}: RecommendedFollowProps) => (
  <MenuItem className={styles.recommendedFollow} onClick={() => null}>
    <Avatar>{avatarImage}</Avatar>
    <div className={styles.nameContainer}>
      <Text text={name} size="sm" />
      <Text text={handle} size="xs" color="secondary" />
    </div>
    <Button text="Follow" style="tertiary" size="sm" />
  </MenuItem>
);

import cx from "classnames";
import { ReactNode } from "react";
import styles from "./Avatar.module.css";

export type AvatarProps = {
  className?: string;
  children: ReactNode;
};

export const Avatar = ({ children, className }: AvatarProps) => (
  <div className={cx(styles.avatarContainer, className)}>{children}</div>
);

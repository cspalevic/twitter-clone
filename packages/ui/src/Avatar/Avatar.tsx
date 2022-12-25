import cx from "classnames";
import styles from "./Avatar.module.css";

export type AvatarProps = {
  className?: string;
  children: JSX.Element;
};

export const Avatar = ({ children, className }: AvatarProps) => (
  <div className={cx(styles.avatarContainer, className)}>{children}</div>
);

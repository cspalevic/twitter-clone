import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import { Text, TextProps } from "ui";
import styles from "./Menu.module.css";

export type MenuItemProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  className?: string;
};

export type MenuProps = {
  title?: string;
  titleProps?: Omit<TextProps, "text">;
  subTitle?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const MenuItem = ({ onClick, children, className }: MenuItemProps) => (
  <div onClick={onClick} className={cx(styles.menuItem, className)}>
    {children}
  </div>
);

export const Menu = ({
  title = "",
  subTitle,
  children,
  className,
  titleProps,
}: MenuProps) => (
  <div className={cx([styles.menu, className])}>
    <div className={styles.menuTitle}>
      <Text text={title} size="md" {...titleProps} />
      {subTitle}
    </div>
    <div className={styles.menuList}>{children}</div>
  </div>
);

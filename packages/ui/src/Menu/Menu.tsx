import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import { Text, TextSize } from "ui";
import styles from "./Menu.module.css";

export type MenuItemProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
  className?: string;
};

export type MenuProps = {
  title?: string;
  subTitle?: ReactNode;
  children: ReactNode;
  titleSize?: TextSize;
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
  titleSize = "md",
}: MenuProps) => (
  <div className={cx([styles.menu, className])}>
    <div className={styles.menuTitle}>
      <Text text={title} size={titleSize} />
      {subTitle}
    </div>
    <div className={styles.menuList}>{children}</div>
  </div>
);

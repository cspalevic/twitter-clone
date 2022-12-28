import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import { Text, TextSize } from "ui";
import styles from "./Menu.module.css";

export type MenuItemProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export type MenuProps = {
  title: string;
  subTitle?: ReactNode;
  children: ReactNode;
  titleSize?: TextSize;
  className?: string;
};

export const MenuItem = ({ onClick, children }: MenuItemProps) => (
  <button onClick={onClick} className={styles.menuItem}>
    {children}
  </button>
);

export const Menu = ({
  title,
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

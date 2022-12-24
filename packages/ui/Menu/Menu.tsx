import cx from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import styles from "./Menu.module.css";

export type MenuItemProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export type MenuProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export const MenuItem = ({ onClick, children }: MenuItemProps) => (
  <button onClick={onClick} className={styles.menuItem}>
    {children}
  </button>
);

export const Menu = ({ title, children, className }: MenuProps) => (
  <div className={cx([styles.menu, className])}>
    <h3 className={styles.menuTitle}>{title}</h3>
    <div className={styles.menuList}>{children}</div>
  </div>
);

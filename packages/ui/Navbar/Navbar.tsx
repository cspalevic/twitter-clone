import cx from "classnames";
import { ForwardedRef, forwardRef } from "react";
import styles from "./Navbar.module.css";
import { NavbarItem, NavbarItemValue } from "./NavbarItem";

export type NavbarProps = {
  items: NavbarItemValue[];
  className?: string;
};

export const Navbar = forwardRef(
  ({ className, items }: NavbarProps, ref: ForwardedRef<HTMLElement>) => (
    <nav className={cx(styles.navbar, className)} ref={ref} role="navigation">
      {items.map((item) => (
        <NavbarItem item={item} />
      ))}
    </nav>
  )
);

Navbar.displayName = "navbar";

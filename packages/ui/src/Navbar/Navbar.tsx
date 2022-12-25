import cx from "classnames";
import { ForwardedRef, forwardRef } from "react";
import styles from "./Navbar.module.css";
import { NavbarExtras } from "./NavbarExtras";
import { NavbarItem, NavbarItemValue } from "./NavbarItem";

export type NavbarProps = {
  items: NavbarItemValue[];
  limit?: number;
  className?: string;
};

export const Navbar = forwardRef(
  (
    { className, items, limit = 0 }: NavbarProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const shownItems = [...items];
    const remainingItems = shownItems.splice(limit, items.length);

    return (
      <nav className={cx(styles.navbar, className)} ref={ref} role="navigation">
        {shownItems.map((item, index) => (
          <NavbarItem item={item} key={index} />
        ))}
        {remainingItems.length && <NavbarExtras items={remainingItems} />}
      </nav>
    );
  }
);

Navbar.displayName = "navbar";

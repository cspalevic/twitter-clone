import { ForwardedRef, forwardRef } from "react";
import { NavbarItem, NavbarItemValue } from "./NavbarItem";

export type NavbarProps = {
  items: NavbarItemValue[];
};

export const Navbar = forwardRef(
  ({ items }: NavbarProps, ref: ForwardedRef<HTMLElement>) => (
    <nav ref={ref} role="navigation">
      {items.map((item) => (
        <NavbarItem item={item} />
      ))}
    </nav>
  )
);

Navbar.displayName = "navbar";

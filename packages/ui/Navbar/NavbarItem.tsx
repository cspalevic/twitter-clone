import cx from "classnames";
import { ForwardedRef, MouseEventHandler, forwardRef, useState } from "react";
import { Icon, IconName } from "../Icon/Icon";
import styles from "./NavbarItem.module.css";

export type NavbarItemValue = {
  text: string;
  active?: boolean;
  iconName?: IconName;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  items?: NavbarItemValue[];
};

export type NavbarItemProps = {
  item: NavbarItemValue;
};

export const ExpandableNavbarItem = ({
  item: { text, items = [] },
}: NavbarItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={cx(styles.nestedNavbarItem, styles.navbarItem)}
      >
        <span>{text}</span>
        <Icon
          className={cx(styles.navbarItemIcon, styles.nestedNavbarItemCaret, {
            [styles.nestedNavbarItemCaretExpanded]: isExpanded,
          })}
          size="sm"
          iconName="Caret"
        />
      </div>
      {isExpanded && (
        <>
          {items.map((subItem) => (
            <NavbarItem item={subItem} />
          ))}
        </>
      )}
    </div>
  );
};

export const NavbarItem = forwardRef(
  ({ item }: NavbarItemProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    if (item.items?.length) return <ExpandableNavbarItem item={item} />;
    const { iconName, text, onClick } = item;
    return (
      <a
        className={cx(styles.navbarItem, {
          [styles.navbarItemActive]: item.active,
        })}
        onClick={onClick}
        ref={ref}
      >
        {iconName && (
          <Icon className={styles.navbarItemIcon} iconName={iconName} />
        )}
        <span className={styles.navbarItemText}>{text}</span>
      </a>
    );
  }
);

NavbarItem.displayName = "NavbarItem";

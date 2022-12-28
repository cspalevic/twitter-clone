import cx from "classnames";
import { ForwardedRef, MouseEventHandler, forwardRef, useState } from "react";
import { Icon, IconName, Text } from "ui";
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
  size?: "sm" | "md";
  className?: string;
  shown?: boolean;
};

export const ExpandableNavbarItem = ({
  item: { text, items = [] },
  className,
}: NavbarItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={cx(styles.nestedNavbarItem, styles.navbarItem, className)}
      >
        <Text text={text} size="sm" />
        <Icon
          className={cx(styles.nestedNavbarItemIcon, {
            [styles.nestedNavbarItemIconExpanded]: isExpanded,
          })}
          size="sm"
          iconName="Caret"
          color={isExpanded ? "secondary" : "primary"}
        />
      </div>
      {isExpanded && (
        <>
          {items.map((subItem, index) => (
            <NavbarItem
              item={subItem}
              key={index}
              className={className}
              size="sm"
            />
          ))}
        </>
      )}
    </div>
  );
};

export const NavbarItem = forwardRef(
  (
    { className, item, size = "md", shown = false }: NavbarItemProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    if (item.items?.length)
      return <ExpandableNavbarItem item={item} className={className} />;
    const { iconName, text, onClick } = item;
    return (
      <a
        className={cx(
          styles.navbarItem,
          styles[`navbarItem-${size}`],
          className,
          {
            [styles.navbarItemShown]: shown,
          }
        )}
        onClick={onClick}
        ref={ref}
      >
        {iconName && (
          <Icon
            className={styles.navbarItemIcon}
            iconName={iconName}
            size={size}
            color="primary"
          />
        )}
        <Text text={text} size={size} bold={item.active} />
      </a>
    );
  }
);

NavbarItem.displayName = "NavbarItem";

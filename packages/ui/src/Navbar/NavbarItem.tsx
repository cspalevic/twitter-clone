import cx from "classnames";
import { ForwardedRef, MouseEventHandler, forwardRef, useState } from "react";
import { Icon, IconName, IconProps } from "../Icon/Icon";
import { Text, TextProps } from "../Text/Text";
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
  className?: string;
  textSize?: TextProps["size"];
  iconSize?: IconProps["size"];
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
          className={cx(styles.navbarItemIcon, styles.nestedNavbarItemCaret, {
            [styles.nestedNavbarItemCaretExpanded]: isExpanded,
          })}
          size="sm"
          iconName="Caret"
        />
      </div>
      {isExpanded && (
        <>
          {items.map((subItem, index) => (
            <NavbarItem
              item={subItem}
              key={index}
              className={className}
              textSize="sm"
              iconSize="sm"
            />
          ))}
        </>
      )}
    </div>
  );
};

export const NavbarItem = forwardRef(
  (
    { className, item, textSize = "md", iconSize = "md" }: NavbarItemProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    if (item.items?.length)
      return <ExpandableNavbarItem item={item} className={className} />;
    const { iconName, text, onClick } = item;
    return (
      <a
        className={cx(styles.navbarItem, className, {
          [styles.navbarItemActive]: item.active,
        })}
        onClick={onClick}
        ref={ref}
      >
        {iconName && (
          <Icon
            className={styles.navbarItemIcon}
            iconName={iconName}
            size={iconSize}
          />
        )}
        <div className={styles.navbarItemText}>
          <Text text={text} size={textSize} />
        </div>
      </a>
    );
  }
);

NavbarItem.displayName = "NavbarItem";

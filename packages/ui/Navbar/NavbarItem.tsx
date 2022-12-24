import cx from "classnames";
import { MouseEventHandler, useState } from "react";
import { Icon, IconName } from "../Icon/Icon";
import styles from "./NavbarItem.module.css";

export type NavbarItemValue = {
  iconName?: IconName;
  text: string;
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
          classNames={[
            cx(styles.nestedNavbarItemCaret, {
              [styles.nestedNavbarItemCaretExpanded]: isExpanded,
            }),
          ]}
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

export const NavbarItem = ({ item }: NavbarItemProps) => {
  if (item.items?.length) return <ExpandableNavbarItem item={item} />;
  const { iconName, text, onClick } = item;
  return (
    <a className={styles.navbarItem} onClick={onClick}>
      {iconName && <Icon iconName={iconName} />}
      <span className={styles.navbarItemText}>{text}</span>
    </a>
  );
};

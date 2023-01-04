import cx from "classnames";
import { ReactNode } from "react";
import { Menu, MenuItem, Text } from "ui";
import styles from "./List.module.css";

export type ListProps = {
  title: string;
  children: ReactNode[];
};

export const ShowMore = () => (
  <MenuItem className={cx(styles.showMoreItem)} onClick={() => null}>
    <Text text="Show more" size="sm" color="tertiary" />
  </MenuItem>
);

export const List = ({ title, children }: ListProps) => {
  return (
    <Menu title={title} titleProps={{ bold: true }} className={styles.list}>
      {children}
      <ShowMore />
    </Menu>
  );
};

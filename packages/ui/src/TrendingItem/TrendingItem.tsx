import { IconButton, MenuItem, Text } from "ui";
import styles from "./TrendingItem.module.css";

export type TrendingItemProps = {
  name: string;
  category?: string;
};

export const TrendingItem = ({ name }: TrendingItemProps) => {
  return (
    <MenuItem className={styles.trendingListItem} onClick={() => null}>
      <div className={styles.trendingListItemInfo}>
        <Text text="Trending" size="xs" color="secondary" />
        <Text text={name} size="sm" />
      </div>
      <IconButton
        iconProps={{ iconName: "More", size: "xs", color: "secondary" }}
        onClick={() => null}
      />
    </MenuItem>
  );
};

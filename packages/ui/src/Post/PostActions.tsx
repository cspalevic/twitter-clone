import cx from "classnames";
import { IconButton, IconName, Text } from "ui";
import styles from "./PostActions.module.css";

type PostActionItem = {
  iconName: IconName;
  focusColor?: "blue" | "red" | "green";
  amount?: number;
};

const PostActionItem = ({
  iconName,
  amount = 0,
  focusColor = "blue",
}: PostActionItem) => (
  <div
    className={cx(
      styles.postActionItem,
      styles[`postActionItem-${focusColor}`]
    )}
  >
    <IconButton
      iconProps={{ iconName, color: "secondary", size: "xs" }}
      style="secondary"
    />
    {amount !== 0 && (
      <Text text={amount.toString()} size="xs" color="secondary" />
    )}
  </div>
);

export type PostActionProps = {
  comments: number;
  retweets: number;
  likes: number;
};

export const PostActions = ({ comments, retweets, likes }: PostActionProps) => {
  return (
    <div className={styles.postActions}>
      <PostActionItem iconName="Analytics" />
      <PostActionItem iconName="Message" amount={comments} />
      <PostActionItem iconName="Retweet" focusColor="green" amount={retweets} />
      <PostActionItem iconName="Heart" focusColor="red" amount={likes} />
      <PostActionItem iconName="Share" />
    </div>
  );
};

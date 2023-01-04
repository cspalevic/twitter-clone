import cx from "classnames";
import { Button, IconButton } from "ui";
import styles from "./PostActions.module.css";
import { usePostInputState } from "./PostInputProvider";

export const PostActions = () => {
  const { status } = usePostInputState();

  return (
    <div
      className={cx(styles.postActions, {
        [styles.postActionsBorder]: status === "active",
      })}
    >
      <div>
        <IconButton
          iconProps={{
            iconName: "MediaOutlined",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
        />
        <IconButton
          iconProps={{
            iconName: "GifOutlined",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
        />
        <IconButton
          iconProps={{
            iconName: "Poll",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
        />
        <IconButton
          iconProps={{
            iconName: "Emoji",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
        />
        <IconButton
          iconProps={{
            iconName: "Schedule",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
        />
        <IconButton
          iconProps={{
            iconName: "Location",
            size: "sm",
            color: "tertiary",
          }}
          style="secondary"
          disabled={true}
        />
      </div>
      <Button text="Tweet" size="sm" disabled={true} />
    </div>
  );
};

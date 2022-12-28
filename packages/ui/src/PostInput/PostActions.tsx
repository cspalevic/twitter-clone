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
            color: "secondary",
          }}
          onClick={() => alert("media clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "GifOutlined",
            size: "sm",
            color: "secondary",
          }}
          onClick={() => alert("gif clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Poll",
            size: "sm",
            color: "secondary",
          }}
          onClick={() => alert("poll clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Emoji",
            size: "sm",
            color: "secondary",
          }}
          onClick={() => alert("emoji clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Schedule",
            size: "sm",
            color: "secondary",
          }}
          onClick={() => alert("schedule clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Location",
            size: "sm",
            color: "secondary",
          }}
          onClick={() => alert("location clicked")}
          disabled={true}
        />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <Button text="Tweet" size="sm" onClick={() => {}} disabled={true} />
    </div>
  );
};

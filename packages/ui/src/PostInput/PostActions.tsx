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
          onClick={() => alert("media clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "GifOutlined",
            size: "sm",
            color: "tertiary",
          }}
          onClick={() => alert("gif clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Poll",
            size: "sm",
            color: "tertiary",
          }}
          onClick={() => alert("poll clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Emoji",
            size: "sm",
            color: "tertiary",
          }}
          onClick={() => alert("emoji clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Schedule",
            size: "sm",
            color: "tertiary",
          }}
          onClick={() => alert("schedule clicked")}
        />
        <IconButton
          iconProps={{
            iconName: "Location",
            size: "sm",
            color: "tertiary",
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

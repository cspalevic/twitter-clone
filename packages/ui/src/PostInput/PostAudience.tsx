import cx from "classnames";
import { MouseEventHandler, ReactNode, useRef, useState } from "react";
import { Avatar, Icon, Menu, MenuItem, Popup, Text } from "ui";
import styles from "./PostAudience.module.css";
import { usePostInputActions, usePostInputState } from "./PostInputProvider";
import { PostInputAudience } from "./state/state";

type PostAudienceItemProps = {
  avatar: ReactNode;
  children: ReactNode;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const PostAudienceItem = ({
  avatar,
  children,
  isSelected,
  onClick,
}: PostAudienceItemProps) => (
  <MenuItem onClick={onClick}>
    <div className={styles.postAudienceItem}>
      {avatar}
      <div className={styles.postAudienceItemInfoContainer}>
        {children}
        {isSelected && (
          <Icon
            iconName="Checkmark"
            color={isSelected ? "secondary" : "primary"}
            size="sm"
          />
        )}
      </div>
    </div>
  </MenuItem>
);

export const PostAudience = () => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { status, audience } = usePostInputState();
  const { updateAudience } = usePostInputActions();

  const handleClick = (audience: PostInputAudience) => {
    updateAudience(audience);
    setIsPopupOpen(false);
  };

  if (status === "inactive") return null;
  return (
    <div>
      <button
        ref={anchorEl}
        className={cx(
          styles.postAudienceButton,
          styles[`postAudienceButton-${audience}`]
        )}
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        disabled={isPopupOpen}
      >
        <Text
          text={audience === "everyone" ? "Everyone" : "Twitter Circle"}
          size="sm"
          color={audience === "everyone" ? "tertiary" : "green"}
        />
        <Icon
          className={styles.postAudienceButtonIcon}
          size="xs"
          iconName="Caret"
          color={audience === "everyone" ? "secondary" : "green"}
        />
      </button>
      {isPopupOpen && (
        <Popup
          placement="bottom"
          anchorEl={anchorEl}
          onClose={() => setIsPopupOpen(false)}
          addPadding
        >
          <Menu title="Choose audience">
            <PostAudienceItem
              onClick={() => handleClick("everyone")}
              isSelected={audience === "everyone"}
              avatar={
                <Avatar className={styles.worldAvatar}>
                  <Icon
                    className={styles.audienceIcon}
                    iconName="World"
                    size="sm"
                  />
                </Avatar>
              }
            >
              <Text text="Everyone" size="sm" />
            </PostAudienceItem>
            <PostAudienceItem
              onClick={() => handleClick("twitter-circle")}
              isSelected={audience === "twitter-circle"}
              avatar={
                <Avatar className={styles.twitterCircleAvatar}>
                  <Icon
                    className={styles.audienceIcon}
                    iconName="Friend"
                    size="sm"
                  />
                </Avatar>
              }
            >
              <Text text="Twitter Circle" size="sm" />
            </PostAudienceItem>
          </Menu>
        </Popup>
      )}
    </div>
  );
};

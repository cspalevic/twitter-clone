import { MouseEventHandler, ReactNode, useRef, useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Icon } from "../Icon/Icon";
import { Menu, MenuItem } from "../Menu/Menu";
import { Popup } from "../Popup/Popup";
import styles from "./PostAudience.module.css";
import { usePostInput } from "./PostInputProvider";

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
          <Icon className={styles.audienceSelectIcon} iconName="Checkmark" />
        )}
      </div>
    </div>
  </MenuItem>
);

export const PostAudience = () => {
  const {
    audience: [value, setValue],
  } = usePostInput();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const anchorEl = useRef<HTMLButtonElement>(null);

  const selectAudience = (audience: typeof value) => {
    setValue(audience);
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button
        ref={anchorEl}
        className={styles.postAudience}
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        disabled={isPopupOpen}
      >
        <span>{value === "everyone" ? "Everyone" : "Twitter Circle"}</span>
        <Icon size="sm" iconName="Caret" />
      </button>
      {isPopupOpen && (
        <Popup
          placement="bottom"
          anchorEl={anchorEl}
          onClose={() => setIsPopupOpen(false)}
        >
          <Menu title="Choose audience" className={styles.postAudienceMenu}>
            <PostAudienceItem
              onClick={() => selectAudience("everyone")}
              isSelected={value === "everyone"}
              avatar={
                <Avatar className={styles.worldAvatar}>
                  <Icon className={styles.audienceIcon} iconName="World" />
                </Avatar>
              }
            >
              <p>Everyone</p>
            </PostAudienceItem>
            <PostAudienceItem
              onClick={() => selectAudience("twitter-circle")}
              isSelected={value === "twitter-circle"}
              avatar={
                <Avatar className={styles.twitterCircleAvatar}>
                  <Icon className={styles.audienceIcon} iconName="Friend" />
                </Avatar>
              }
            >
              {"Twitter Circle!"}
            </PostAudienceItem>
          </Menu>
        </Popup>
      )}
    </div>
  );
};

import { MouseEventHandler, useRef, useState } from "react";
import { Avatar, Icon, IconName, Menu, MenuItem, Popup, Text } from "ui";
import styles from "./PostInputInteractees.module.css";
import { usePostInputActions, usePostInputState } from "./PostInputProvider";
import { PostInputInteractees as PostInputInteracteeType } from "./state/state";

type PostAudienceInteracteeProps = {
  iconName: IconName;
  text: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const PostAudienceInteractee = ({
  iconName,
  text,
  isSelected,
  onClick,
}: PostAudienceInteracteeProps) => (
  <MenuItem onClick={onClick}>
    <div className={styles.postInteracteeItem}>
      <Avatar className={styles.avatar}>
        <Icon iconName={iconName} size="sm" />
      </Avatar>
      <div className={styles.postInteracteeItemInfoContainer}>
        <Text text={text} size="sm" />
        {isSelected && (
          <Icon
            iconName="Checkmark"
            color={isSelected ? "tertiary" : "primary"}
            size="sm"
          />
        )}
      </div>
    </div>
  </MenuItem>
);

export const PostInputInteractees = () => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { status, audience, interactees } = usePostInputState();
  const { updateInteractees } = usePostInputActions();

  const handleClick = (interactee: PostInputInteracteeType) => {
    updateInteractees(interactee);
    setIsPopupOpen(false);
  };

  if (status === "inactive") return null;

  let iconName: IconName = "World";
  let text = "Everyone can reply";
  let disabled = false;
  if (audience === "twitter-circle") {
    iconName = "Lock";
    text = "Only your Twitter Circle can reply";
    disabled = true;
  } else if (interactees === "following") {
    iconName = "Follower";
    text = "People you follow can reply";
  } else if (interactees === "mentions") {
    iconName = "AtSymbol";
    text = "Only people you mention can reply";
  }

  return (
    <div>
      <button
        className={styles.postInputInteracteeButton}
        disabled={disabled}
        ref={anchorEl}
        onClick={() => setIsPopupOpen(true)}
      >
        <Icon
          className={styles.postInputInteracteeButtonIcon}
          iconName={iconName}
          size="xs"
          color="tertiary"
        />
        <Text text={text} size="xs" color="tertiary" />
      </button>
      {isPopupOpen && (
        <Popup
          placement="bottom"
          anchorEl={anchorEl}
          onClose={() => setIsPopupOpen(false)}
          addPadding
        >
          <Menu
            title="Who can reply?"
            titleProps={{ size: "sm" }}
            subTitle={
              <>
                <Text
                  text="Choose who can reply to this Tweet."
                  size="sm"
                  color="secondary"
                />
                <Text
                  text="Anyone mentioned can always reply."
                  size="sm"
                  color="secondary"
                />
              </>
            }
          >
            <PostAudienceInteractee
              iconName="WorldOutlined"
              text="Everyone"
              isSelected={interactees === "everyone"}
              onClick={() => handleClick("everyone")}
            />
            <PostAudienceInteractee
              iconName="FollowerOutlined"
              text="People you follow"
              isSelected={interactees === "following"}
              onClick={() => handleClick("following")}
            />
            <PostAudienceInteractee
              iconName="AtSymbol"
              text="Only people you mention"
              isSelected={interactees === "mentions"}
              onClick={() => handleClick("mentions")}
            />
          </Menu>
        </Popup>
      )}
    </div>
  );
};

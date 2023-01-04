import { ReactNode, useRef, useState } from "react";
import { Avatar, Icon, Menu, MenuItem, Popup, Text } from "ui";
import styles from "./ProfileButton.module.css";

export type ProfileButtonProps = {
  avatarImage: ReactNode;
  name: string;
  handle: string;
};

export const ProfileButton = ({
  avatarImage,
  name,
  handle,
}: ProfileButtonProps) => {
  const buttonRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button
        className={styles.profile}
        ref={buttonRef}
        onClick={() => setIsPopupOpen(true)}
      >
        <Avatar>{avatarImage}</Avatar>
        <div className={styles.profileText}>
          <Text text={name} />
          <Text text={handle} size="sm" color="secondary" />
        </div>
        <Icon className={styles.profileIcon} iconName="More" size="sm" />
      </button>
      {isPopupOpen && (
        <Popup
          anchorEl={buttonRef}
          placement="top"
          onClose={() => setIsPopupOpen(false)}
          showArrow
        >
          <Menu className={styles.menu}>
            <MenuItem className={styles.menuItem} onClick={console.log}>
              <Text size="sm" text="Add an existing account" />
            </MenuItem>
            <MenuItem className={styles.menuItem} onClick={console.log}>
              <Text size="sm" text="Log out @cspalevic" />
            </MenuItem>
          </Menu>
        </Popup>
      )}
    </>
  );
};

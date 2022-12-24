import { useRouter } from "next/router";
import { Avatar, Button, Icon, IconButton, Navbar } from "ui";
import { NavbarItemValue } from "ui/Navbar/NavbarItem";
import styles from "./Header.module.css";

export const navbarItems: NavbarItemValue[] = [
  {
    iconName: "Home",
    text: "Home",
    onClick: () => alert("You clicked Home!"),
  },
  {
    iconName: "Hashtag",
    text: "Explore",
    onClick: () => alert("You clicked Explore!"),
  },
  {
    iconName: "Notifications",
    text: "Notifications",
    onClick: () => alert("You clicked Notifications!"),
  },
  {
    iconName: "Email",
    text: "Messages",
    onClick: () => alert("You clicked Messages!"),
  },
  {
    iconName: "Bookmark",
    text: "Bookmarks",
    onClick: () => alert("You clicked Bookmarks!"),
  },
  {
    iconName: "TwitterBlue",
    text: "Twitter Blue",
    onClick: () => alert("You clicked Twitter Blue!"),
  },
  {
    iconName: "Profile",
    text: "Profile",
    onClick: () => alert("You clicked Profile!"),
  },
];

export const Header = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerActionBarContainer}>
        <IconButton
          onClick={() => alert("logo clicked")}
          iconProps={{
            iconName: "Logo",
            className: styles.logo,
          }}
        />
        <header>
          <Navbar items={navbarItems} />
        </header>
        <Button text="Tweet" onClick={() => alert("You clicked tweet")} />
      </div>
      <Avatar>
        <Icon className={styles.logo} iconName="Profile" />
      </Avatar>
    </div>
  );
};

import { IconName } from "ui";
import { NavbarItemValue } from "ui/Navbar/NavbarItem";

export const NAVBAR_ITEM_LIMIT = 7;

type NavbarRoute = {
  path: string;
  icon?: IconName;
  activeIcon?: IconName;
  text: string;
};

export const navbarRoutes: NavbarRoute[] = [
  {
    path: "/",
    icon: "HomeOutlined",
    activeIcon: "Home",
    text: "Home",
  },
  {
    path: "/explore",
    icon: "Hashtag",
    activeIcon: "HashtagBold",
    text: "Explore",
  },
  {
    path: "/notifications",
    icon: "NotificationsOutlined",
    activeIcon: "Notifications",
    text: "Notifications",
  },
  {
    path: "/messages",
    icon: "EmailOutlined",
    activeIcon: "Email",
    text: "Messages",
  },
  {
    path: "/bookmarks",
    icon: "BookmarkOutlined",
    activeIcon: "Bookmark",
    text: "Bookmarks",
  },
  {
    path: "/twitter_blue_sign_up",
    icon: "TwitterBlueOutlined",
    activeIcon: "TwitterBlue",
    text: "Twtter Blue",
  },
  {
    path: "/profile",
    icon: "ProfileOutlined",
    activeIcon: "Profile",
    text: "Profile",
  },
  {
    path: "/topics",
    icon: "TopicOutlined",
    activeIcon: "TopicOutlined",
    text: "Topics",
  },
  {
    path: "/lists",
    icon: "ListOutlined",
    activeIcon: "ListOutlined",
    text: "Lists",
  },
  {
    path: "/twitter-circle",
    icon: "FriendOutlined",
    activeIcon: "FriendOutlined",
    text: "Twitter Circle",
  },
];

export const convertRoutesToItems = (
  currentPath: string,
  push: Function
): NavbarItemValue[] =>
  navbarRoutes.map(({ path, icon, activeIcon, text }) => ({
    text,
    active: currentPath === path,
    iconName: currentPath === path ? activeIcon : icon,
    onClick: () => push(path),
  }));

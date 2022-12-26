import { IconName, NavbarItemValue } from "ui";

export const NAVBAR_ITEM_LIMIT = 7;

type NavbarRoute = {
  path?: string;
  icon?: IconName;
  activeIcon?: IconName;
  text: string;
  subRoutes?: NavbarRoute[];
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
    path: "/i/bookmarks",
    icon: "BookmarkOutlined",
    activeIcon: "Bookmark",
    text: "Bookmarks",
  },
  {
    path: "/i/twitter_blue_sign_up",
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
  {
    text: "Creator Studio",
    subRoutes: [
      {
        icon: "NewslettersOutlined",
        text: "Newletters",
      },
      {
        icon: "Analytics",
        text: "Analytics",
      },
    ],
  },
  {
    text: "Professional Tools",
    subRoutes: [
      {
        icon: "RocketOutlined",
        text: "Professional Home",
      },
      {
        icon: "TwitterAdsOutlined",
        text: "Twitter Ads",
      },

      {
        icon: "MonetizationOutlined",
        text: "Monetization",
      },
    ],
  },
  {
    text: "Settings and Support",
    subRoutes: [
      {
        icon: "SettingsOutlined",
        text: "Settings and privacy",
      },
      {
        icon: "HelpOutlined",
        text: "Help Center",
      },
      {
        icon: "DisplayOutlined",
        text: "Display",
      },
      {
        icon: "ShortcutOutlined",
        text: "Keyboard shortcuts",
      },
    ],
  },
];

const mapRouteToItem = (
  { path, icon, activeIcon, text, subRoutes }: NavbarRoute,
  currentPath: string,
  push: Function
): NavbarItemValue => ({
  text,
  active: currentPath === path,
  iconName: currentPath === path ? activeIcon : icon,
  onClick: () => (subRoutes?.length ? null : push(path)),
  items:
    subRoutes &&
    subRoutes.map((route) => mapRouteToItem(route, currentPath, push)),
});

export const getNavbarItems = (
  currentPath: string,
  push: Function
): NavbarItemValue[] =>
  navbarRoutes.map((route) => mapRouteToItem(route, currentPath, push));

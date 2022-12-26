import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar, Icon } from "ui";
import styles from "./Avatar.module.css";

export const IconExample = () => {
  return _jsx(
    Avatar,
    Object.assign(
      { className: styles.iconExample },
      {
        children: _jsx(Icon, {
          className: styles.iconFill,
          iconName: "Bookmark",
        }),
      }
    )
  );
};
export default {
  title: "Avatar",
  component: Avatar,
};

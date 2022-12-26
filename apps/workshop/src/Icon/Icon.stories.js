import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from "ui";
import styles from "./Icon.module.css";

const Template = (args) => _jsx(Icon, Object.assign({}, args));
export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "Home",
};
export const IconWithExtraStyles = Template.bind({});
IconWithExtraStyles.args = {
  iconName: "MoreOutlined",
  size: "lg",
  className: styles.extraClasses,
};
export default {
  title: "Icons",
  component: Icon,
};

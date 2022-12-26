import { jsx as _jsx } from "react/jsx-runtime";
import { PostInput } from "ui";
import styles from "./PostInput.module.css";

export const SamplePostInput = () =>
  _jsx(
    "div",
    Object.assign(
      { className: styles.container },
      { children: _jsx(PostInput, {}) }
    )
  );
export default {
  title: "Post Input",
  component: PostInput,
};

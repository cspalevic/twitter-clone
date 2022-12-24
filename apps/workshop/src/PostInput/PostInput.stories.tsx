import { ComponentMeta } from "@storybook/react";
import { PostInput } from "ui";
import styles from "./PostInput.module.css";

type PostInputType = typeof PostInput;
type PostInputMeta = ComponentMeta<PostInputType>;

export const SamplePostInput = () => (
  <div className={styles.container}>
    <PostInput />
  </div>
);

export default {
  title: "Post Input",
  component: PostInput,
} as PostInputMeta;

import { ReactNode } from "react";
import { Avatar } from "ui";
import { PostActions } from "./PostActions";
import { PostAudience } from "./PostAudience";
import styles from "./PostInput.module.css";
import { PostInputInteractees } from "./PostInputInteractees";
import { PostInputProvider } from "./PostInputProvider";
import { PostTextBox } from "./PostTextBox";

export type PostInputProps = {
  avatarImage: ReactNode;
  lines?: number;
};

export const PostInput = ({ avatarImage, lines }: PostInputProps) => {
  return (
    <PostInputProvider>
      <div className={styles.container}>
        <Avatar>{avatarImage}</Avatar>
        <div className={styles.postContainer}>
          <PostAudience />
          <PostTextBox placeholder="What's happening?" lines={lines} />
          <PostInputInteractees />
          <PostActions />
        </div>
      </div>
    </PostInputProvider>
  );
};

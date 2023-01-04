import { ReactNode } from "react";
import { Profile } from "types-custom";
import { Avatar, IconButton, Text } from "ui";
import styles from "./Post.module.css";
import { PostActions } from "./PostActions";
import { PostAuthor } from "./PostAuthor";

export type PostProps = {
  avatarImage: ReactNode;
  profile: Profile;
  text: string;
  comments: number;
  retweets: number;
  likes: number;
};

export const Post = ({
  avatarImage,
  profile,
  text,
  comments,
  retweets,
  likes,
}: PostProps) => (
  <div className={styles.postContainer}>
    <Avatar>{avatarImage}</Avatar>
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.postTitle}>
          <PostAuthor profile={profile} />
          <IconButton
            iconProps={{ iconName: "More", color: "secondary", size: "sm" }}
            style="secondary"
          />
        </div>
        <Text text={text} size="sm" />
      </div>
      <PostActions comments={comments} retweets={retweets} likes={likes} />
    </div>
  </div>
);

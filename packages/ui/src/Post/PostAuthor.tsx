import { Profile } from "types-custom";
import { Text } from "ui";
import styles from "./PostAuthor.module.css";

export type PostAuthorProps = {
  profile: Profile;
};

export const PostAuthor = ({ profile: { name, handle } }: PostAuthorProps) => (
  <div className={styles.postAuthor}>
    <Text text={name} />
    <Text text={`@${handle}`} color="secondary" size="sm" />
  </div>
);

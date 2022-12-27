import { Button } from "../Button/Button";
import { PostAudience } from "./PostAudience";
import styles from "./PostInput.module.css";
import { PostInputProvider } from "./PostInputProvider";

export type PostInputProps = {
  lines?: number;
};

export const PostInput = () => {
  return (
    <PostInputProvider>
      <div className={styles.container}>
        <div className={styles.avatarContainer}>{"Avatar"}</div>
        <div className={styles.postContainer}>
          <div>
            <PostAudience />
          </div>
          <div>{"What's happening?"}</div>
          <div>Everyone can reploy</div>
          <div>
            <div>Icons</div>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <Button text="Tweet" onClick={() => {}} />
          </div>
        </div>
      </div>
    </PostInputProvider>
  );
};

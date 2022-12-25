import { IconButton, PostInput, StickyHeader, Text } from "ui";
import styles from "./home.module.css";

const Web = () => {
  return (
    <div>
      <StickyHeader>
        <div className={styles.header}>
          <Text text="Home" bold />
          <IconButton
            onClick={() => alert("Top Tweets")}
            iconProps={{ iconName: "TopTweet" }}
          />
        </div>
      </StickyHeader>
      <div>
        <h3>Home</h3>
      </div>
      <PostInput />
      {new Array(100).fill(0).map((_, index) => (
        <div style={{ height: "400px", width: "100%" }}>
          <h1 style={{ color: "white" }}>{`Tweet number ${index}`}</h1>
        </div>
      ))}
    </div>
  );
};

export default Web;

import Image from "next/image";
import { IconButton, PostInput, StickyHeader, Text } from "ui";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div style={{ width: "500px" }}>
      <StickyHeader>
        <div className={styles.header}>
          <Text text="Home" bold />
          <IconButton
            onClick={() => alert("Top Tweets")}
            iconProps={{ iconName: "TopTweet", size: "sm" }}
          />
        </div>
      </StickyHeader>
      <PostInput
        avatarImage={
          <Image
            alt="Person Avatar"
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg"
            width={50}
            height={50}
          />
        }
      />
      {new Array(100).fill(0).map((_, index) => (
        <div style={{ height: "400px", width: "100%" }}>
          <h1 style={{ color: "white" }}>{`Tweet number ${index}`}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
